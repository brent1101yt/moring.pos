document.addEventListener('DOMContentLoaded', () => {
    const menu = window.menuData;
    let currentCategory = 'combo';
    let cart = [];
    let orderType = null; // 'dine-in' or 'take-out'
    let tableNumber = null;
    
    let currentProductForCustom = null;
    let selectedOptions = {};

    // Supabase 設定
    const SUPABASE_URL = 'https://xvieufpjzunqgntrmrtd.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_mKdYHJ8un3MR49whayfLpw_1f6P-hXt';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    // DOM 元素
    const orderTypeModal = document.getElementById('order-type-modal');
    const btnDineIn = document.getElementById('btn-dine-in');
    const btnTakeOut = document.getElementById('btn-take-out');
    const tableDisplay = document.getElementById('table-display');
    const categoriesList = document.getElementById('categories-list');
    const productsGrid = document.getElementById('products-grid');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartBar = document.getElementById('cart-bar');
    
    const customModal = document.getElementById('custom-modal');
    const modalItemName = document.getElementById('modal-item-name');
    const modalOptions = document.getElementById('modal-options');
    const btnCancelCustom = document.getElementById('btn-cancel-custom');
    const btnConfirmCustom = document.getElementById('btn-confirm-custom');
    
    const tableModal = document.getElementById('table-modal');
    const tableGrid = document.getElementById('table-grid');
    const btnCancelTable = document.getElementById('btn-cancel-table');
    
    const cartModal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items-list');
    const modalCartTotal = document.getElementById('modal-cart-total');
    const btnCloseCart = document.getElementById('btn-close-cart');
    const btnSendOrder = document.getElementById('btn-send-order');

    // 1. 解析 URL 參數（桌號）
    const urlParams = new URLSearchParams(window.location.search);
    tableNumber = urlParams.get('table');
    
    if (tableNumber) {
        tableDisplay.textContent = `桌號: ${tableNumber}`;
        orderType = 'dine-in';
        orderTypeModal.classList.remove('visible');
    }

    // 2. 處理內外帶選擇
    btnDineIn.addEventListener('click', () => {
        orderType = 'dine-in';
        orderTypeModal.classList.remove('visible');
        
        if (!tableNumber) {
            showTableModal();
        } else {
            tableDisplay.textContent = `內用: ${tableNumber} 號桌`;
        }
    });

    btnTakeOut.addEventListener('click', () => {
        orderType = 'take-out';
        tableDisplay.textContent = '外帶';
        orderTypeModal.classList.remove('visible');
    });

    // 3. 顯示桌號選擇選單
    function showTableModal() {
        tableGrid.innerHTML = '';
        
        for (let i = 1; i <= 10; i++) {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = `${i} 號桌`;
            
            btn.addEventListener('click', () => {
                tableNumber = i;
                tableDisplay.textContent = `內用: ${tableNumber} 號桌`;
                tableModal.classList.remove('visible');
            });
            
            tableGrid.appendChild(btn);
        }
        
        tableModal.classList.add('visible');
    }

    btnCancelTable.addEventListener('click', () => {
        tableModal.classList.remove('visible');
        orderTypeModal.classList.add('visible'); // 返回上一步
    });

    // 4. 切換類別
    categoriesList.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        
        document.querySelector('#categories-list li.active').classList.remove('active');
        li.classList.add('active');
        
        currentCategory = li.dataset.category;
        renderProducts();
    });

    // 5. 渲染商品
    function renderProducts() {
        productsGrid.innerHTML = '';
        const products = menu.products.filter(p => p.category === currentCategory);
        
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            let displayPrice = p.price;
            let priceSuffix = '';
            
            if (!displayPrice && p.options) {
                displayPrice = p.options[0].choices[0].price;
                priceSuffix = ' 起';
            }
            
            card.innerHTML = `
                <div>
                    <div class="product-name">${p.name}</div>
                    ${p.description ? `<small style="color: #a0aec0; font-size: 0.8rem;">${p.description}</small>` : ''}
                </div>
                <div class="product-price">$${displayPrice}${priceSuffix}</div>
            `;
            
            card.addEventListener('click', () => handleProductClick(p));
            productsGrid.appendChild(card);
        });
    }

    // 6. 處理商品點擊
    function handleProductClick(product) {
        if (product.category === 'combo' || product.options) {
            showCustomModal(product);
        } else {
            addToCart(product.name, product.price);
        }
    }

    // 7. 顯示客製化彈窗
    function showCustomModal(product) {
        currentProductForCustom = product;
        selectedOptions = {};
        
        modalItemName.textContent = product.name;
        modalOptions.innerHTML = '';
        
        // A. 處理套餐更換飲料邏輯
        if (product.category === 'combo') {
            const optDiv = document.createElement('div');
            optDiv.className = 'option-group';
            optDiv.innerHTML = `<div class="option-title">更換飲料 (折抵 15 元)</div>`;
            
            const choicesDiv = document.createElement('div');
            choicesDiv.className = 'choices-grid';
            
            const defaultChoice = { name: '不更換 (附中杯紅茶)', price: 0 };
            const defaultBtn = document.createElement('button');
            defaultBtn.className = 'choice-btn active';
            defaultBtn.textContent = defaultChoice.name;
            selectedOptions['飲料'] = defaultChoice;
            
            defaultBtn.addEventListener('click', () => {
                choicesDiv.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
                defaultBtn.classList.add('active');
                selectedOptions['飲料'] = defaultChoice;
            });
            choicesDiv.appendChild(defaultBtn);
            
            const drinks = menu.products.filter(p => p.category === 'drink');
            drinks.forEach(d => {
                if (d.options) {
                    const sizeOpt = d.options.find(o => o.name === '容量');
                    if (sizeOpt) {
                        sizeOpt.choices.forEach(c => {
                            if (d.name === '紅茶' && c.name === '中杯') return;
                            
                            const btn = document.createElement('button');
                            btn.className = 'choice-btn';
                            const extraPrice = c.price - 15;
                            btn.textContent = `${d.name}(${c.name}) (+$${extraPrice})`;
                            
                            btn.addEventListener('click', () => {
                                choicesDiv.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
                                btn.classList.add('active');
                                selectedOptions['飲料'] = { name: `${d.name}(${c.name})`, price: extraPrice };
                            });
                            
                            choicesDiv.appendChild(btn);
                        });
                    }
                }
            });
            
            optDiv.appendChild(choicesDiv);
            modalOptions.appendChild(optDiv);
        }
        
        // B. 商品專屬選項（如麵包、大小）
        if (product.options) {
            product.options.forEach(opt => {
                const optDiv = document.createElement('div');
                optDiv.className = 'option-group';
                optDiv.innerHTML = `<div class="option-title">${opt.name}</div>`;
                
                const choicesDiv = document.createElement('div');
                choicesDiv.className = 'choices-grid';
                
                opt.choices.forEach(choice => {
                    const btn = document.createElement('button');
                    btn.className = 'choice-btn';
                    btn.textContent = `${choice.name} ($${choice.price})`;
                    
                    btn.addEventListener('click', () => {
                        optDiv.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');
                        selectedOptions[opt.name] = choice;
                    });
                    
                    choicesDiv.appendChild(btn);
                    
                    if (!selectedOptions[opt.name]) {
                        btn.classList.add('active');
                        selectedOptions[opt.name] = choice;
                    }
                });
                
                optDiv.appendChild(choicesDiv);
                modalOptions.appendChild(optDiv);
            });
        }
        
        customModal.classList.add('visible');
    }

    // 8. 彈窗按鈕事件
    btnCancelCustom.addEventListener('click', () => {
        customModal.classList.remove('visible');
    });

    btnConfirmCustom.addEventListener('click', () => {
        const product = currentProductForCustom;
        let finalName = product.name;
        let finalPrice = product.price || 0;
        const optionsDetails = [];
        
        if (product.options) {
            const allSelected = product.options.every(opt => selectedOptions[opt.name]);
            if (!allSelected) {
                alert('請選擇所有選項！');
                return;
            }
        }
        
        for (const [optName, choice] of Object.entries(selectedOptions)) {
            if (!product.price && product.options && product.options.some(o => o.name === optName)) {
                finalPrice += choice.price;
                optionsDetails.push(choice.name);
            } else if (choice.price > 0 || choice.price < 0 || optName === '飲料') {
                finalPrice += choice.price;
                optionsDetails.push(choice.name);
            }
        }
        
        if (optionsDetails.length > 0) {
            finalName += ` (${optionsDetails.join(', ')})`;
        }
        
        addToCart(finalName, finalPrice);
        customModal.classList.remove('visible');
    });

    // 9. 加入購物車
    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    function updateCart() {
        cartCount.textContent = cart.length;
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total;
        modalCartTotal.textContent = total;
    }

    // 10. 購物車彈窗邏輯
    cartBar.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('購物車是空的，快去點餐吧！');
            return;
        }
        renderCartItems();
        cartModal.classList.add('visible');
    });

    btnCloseCart.addEventListener('click', () => {
        cartModal.classList.remove('visible');
    });

    function renderCartItems() {
        cartItemsList.innerHTML = '';
        
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                </div>
                <div class="cart-item-price">$${item.price}</div>
                <button class="btn-delete-item" data-index="${index}">×</button>
            `;
            
            itemDiv.querySelector('.btn-delete-item').addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.index);
                cart.splice(idx, 1);
                updateCart();
                renderCartItems();
                
                if (cart.length === 0) {
                    cartModal.classList.remove('visible');
                }
            });
            
            cartItemsList.appendChild(itemDiv);
        });
    }

    // 11. 送出訂單到 Supabase
    btnSendOrder.addEventListener('click', async () => {
        if (cart.length === 0) return;

        btnSendOrder.disabled = true;
        btnSendOrder.textContent = '送出中...';

        const orderData = {
            order_type: orderType || 'take-out',
            table_number: tableNumber,
            total_amount: cart.reduce((sum, item) => sum + item.price, 0),
            status: 'pending'
        };

        try {
            // 1. 插入訂單主表
            const { data, error } = await supabase
                .from('orders')
                .insert([orderData])
                .select();

            if (error) throw error;

            const orderId = data[0].id;

            // 2. 插入訂單明細
            const itemsData = cart.map(item => ({
                order_id: orderId,
                name: item.name,
                price: item.price
            }));

            const { error: itemsError } = await supabase
                .from('order_items')
                .insert(itemsData);

            if (itemsError) throw itemsError;

            const displayId = 'ORD' + orderId.toString().padStart(3, '0');
            alert(`訂單已成功送出！\n\n您的取餐與付款編號為：${displayId}\n請記下此編號並向老闆核對。`);
            
            cart = [];
            updateCart();
            cartModal.classList.remove('visible');

        } catch (error) {
            console.error('送單失敗:', error);
            // 顯示詳細錯誤訊息以便除錯
            alert('送單失敗: ' + (error.message || error));
        } finally {
            btnSendOrder.disabled = false;
            btnSendOrder.textContent = '送出訂單';
        }
    });

    // 初始化
    renderProducts();
});
