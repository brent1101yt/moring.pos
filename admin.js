document.addEventListener('DOMContentLoaded', () => {
    // Supabase 設定
    const SUPABASE_URL = 'https://xvieufpjzunqgntrmrtd.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_mKdYHJ8un3MR49whayfLpw_1f6P-hXt';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    let orders = [];

    const ordersGrid = document.getElementById('orders-grid');
    const pendingCount = document.getElementById('pending-count');
    const completedCount = document.getElementById('completed-count');
    const notificationSound = document.getElementById('notification-sound');

    // 1. 讀取所有訂單（含明細）
    async function fetchOrders() {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select(`
                    id,
                    created_at,
                    order_type,
                    table_number,
                    total_amount,
                    status,
                    order_items (
                        name,
                        price
                    )
                `)
                .order('created_at', { ascending: false });

            if (error) throw error;

            // 轉換資料格式以符合 UI
            orders = data.map(o => ({
                id: o.id,
                displayId: 'ORD' + o.id.toString().padStart(3, '0'),
                type: o.order_type,
                table: o.table_number,
                time: new Date(o.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                items: o.order_items,
                total: o.total_amount,
                status: o.status
            }));

            renderOrders();

        } catch (error) {
            console.error('讀取訂單失敗:', error);
        }
    }

    // 2. 渲染畫面
    function renderOrders() {
        ordersGrid.innerHTML = '';
        
        const pendingOrders = orders.filter(o => o.status === 'pending');
        const completedOrders = orders.filter(o => o.status === 'completed');
        
        pendingCount.textContent = pendingOrders.length;
        completedCount.textContent = completedOrders.length;
        
        if (orders.length === 0) {
            ordersGrid.innerHTML = '<div class="no-orders">目前沒有訂單</div>';
            return;
        }
        
        // 先顯示未處理，再顯示已完成
        const sortedOrders = [...pendingOrders, ...completedOrders];
        
        sortedOrders.forEach(order => {
            const card = document.createElement('div');
            card.className = `order-card ${order.status === 'completed' ? 'completed' : ''}`;
            
            const itemsHtml = order.items.map(item => `
                <li>
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">$${item.price}</span>
                </li>
            `).join('');
            
            card.innerHTML = `
                <div class="order-header">
                    <div>
                        <div class="order-title">單號: ${order.displayId}</div>
                        <div class="order-time">${order.time}</div>
                    </div>
                    <span class="order-type-tag">${order.type === 'dine-in' ? `內用 ${order.table}桌` : '外帶'}</span>
                </div>
                <ul class="order-items">
                    ${itemsHtml}
                </ul>
                <div class="order-footer">
                    <div class="order-total">總計: $${order.total}</div>
                    <div class="order-actions">
                        ${order.status === 'pending' ? 
                            `<button class="btn-complete" data-id="${order.id}">完成</button>` : 
                            `<span style="color: #718096; font-weight: 600;">已完成</span>`
                        }
                        <button class="btn-delete" data-id="${order.id}">刪除</button>
                    </div>
                </div>
            `;
            
            // 綁定按鈕事件
            const btnComplete = card.querySelector('.btn-complete');
            if (btnComplete) {
                btnComplete.addEventListener('click', () => completeOrder(order.id));
            }
            
            card.querySelector('.btn-delete').addEventListener('click', () => deleteOrder(order.id));
            
            ordersGrid.appendChild(card);
        });
    }

    // 3. 更新訂單狀態為已完成
    async function completeOrder(id) {
        try {
            const { error } = await supabase
                .from('orders')
                .update({ status: 'completed' })
                .eq('id', id);

            if (error) throw error;
            
            // 重新讀取（Realtime 會處理，但手動觸發也行）
            fetchOrders();
        } catch (error) {
            console.error('更新訂單失敗:', error);
        }
    }

    // 4. 刪除訂單
    async function deleteOrder(id) {
        if (confirm('確定要刪除這筆訂單嗎？（會連同明細一起刪除）')) {
            try {
                const { error } = await supabase
                    .from('orders')
                    .delete()
                    .eq('id', id);

                if (error) throw error;
                
                fetchOrders();
            } catch (error) {
                console.error('刪除訂單失敗:', error);
            }
        }
    }

    // 5. 設定 Realtime 即時監聽
    const subscription = supabase
        .channel('schema-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'orders'
            },
            (payload) => {
                console.log('資料庫有變動:', payload);
                fetchOrders(); // 有任何變動就重新抓取
                
                // 如果是新增訂單，播放叮咚聲
                if (payload.eventType === 'INSERT') {
                    try {
                        notificationSound.play();
                    } catch (e) {
                        console.log('聲音播放失敗');
                    }
                }
            }
        )
        .subscribe();

    // 模擬按鈕依然保留，但現在它會真的寫入資料庫！
    window.simulateNewOrder = async function() {
        const orderData = {
            order_type: Math.random() > 0.5 ? 'dine-in' : 'take-out',
            table_number: Math.floor(Math.random() * 10 + 1).toString(),
            total_amount: 105,
            status: 'pending'
        };

        try {
            const { data, error } = await supabase
                .from('orders')
                .insert([orderData])
                .select();

            if (error) throw error;

            const { error: itemsError } = await supabase
                .from('order_items')
                .insert([
                    { order_id: data[0].id, name: '怪怪蛋餅 (加拉絲)', price: 75 },
                    { order_id: data[0].id, name: '豆漿 (大杯)', price: 30 }
                ]);

            if (itemsError) throw itemsError;

        } catch (error) {
            console.error('模擬失敗:', error);
        }
    };

    // 初始化讀取
    fetchOrders();
});
