const menuData = {
    categories: [
        { id: 'combo', name: '套餐類' },
        { id: 'burger', name: '漢堡類' },
        { id: 'sandwich', name: '三明治類' },
        { id: 'eggroll', name: '蛋餅類' },
        { id: 'noodle', name: '鐵板麵加蛋' },
        { id: 'roll', name: '墨西哥捲類' },
        { id: 'snack', name: '點心類' },
        { id: 'toast', name: '烤吐司類' },
        { id: 'croissant', name: '可頌類' },
        { id: 'drink', name: '冷熱飲' }
    ],
    products: [
        // === 套餐類 ===
        { 
            id: 'c1', 
            category: 'combo', 
            name: '美式套餐', 
            price: 70, 
            description: '附中杯紅茶',
            options: [
                {
                    name: '主餐選擇',
                    choices: [
                        { name: '火腿', price: 0 },
                        { name: '豬排', price: 0 }
                    ]
                }
            ]
        },
        { id: 'c2', category: 'combo', name: '日式套餐', price: 85, description: '附中杯紅茶' },
        { id: 'c3', category: 'combo', name: '中式套餐', price: 85, description: '蘿蔔糕+煎餃+塔香煎蛋 + 附中杯紅茶' },
        { id: 'c4', category: 'combo', name: '兒童套餐', price: 90, description: '附中杯紅茶' },
        { 
            id: 'c5', 
            category: 'combo', 
            name: '墨西哥套餐', 
            price: 90, 
            description: '附中杯紅茶',
            options: [
                {
                    name: '口味選擇',
                    choices: [
                        { name: '鮪魚捲', price: 0 },
                        { name: '燻雞捲', price: 0 },
                        { name: '照燒捲', price: 0 },
                        { name: '咔啦捲', price: 0 },
                        { name: '香腸捲', price: 0 }
                    ]
                }
            ]
        },
        { 
            id: 'c6', 
            category: 'combo', 
            name: '鐵板麵套餐', 
            price: 90, 
            description: '附中杯紅茶',
            options: [
                {
                    name: '口味選擇',
                    choices: [
                        { name: '黑胡椒', price: 0 },
                        { name: '磨菇', price: 0 },
                        { name: '沙茶', price: 0 },
                        { name: '肉燥', price: 0 }
                    ]
                }
            ]
        },
        { id: 'c7', category: 'combo', name: '法式總匯套餐', price: 95, description: '附中杯紅茶' },
        { 
            id: 'c8', 
            category: 'combo', 
            name: '潛艇堡套餐', 
            price: 95, 
            description: '附中杯紅茶',
            options: [
                {
                    name: '口味選擇',
                    choices: [
                        { name: '鮪魚', price: 0 },
                        { name: '燻雞', price: 0 },
                        { name: '咔啦雞腿', price: 0 },
                        { name: '德式香腸', price: 0 }
                    ]
                }
            ]
        },
        { id: 'c9', category: 'combo', name: '悠活套餐', price: 100, description: '泰式雞肉&起司蛋捲&生菜沙拉&香蒜麵包 + 附中杯紅茶' },
        { id: 'c10', category: 'combo', name: '德式套餐', price: 110, description: '德式香腸&薯餅蛋塔&生菜沙拉&奶油餐包 + 附中杯紅茶' },
        { 
            id: 'c11', 
            category: 'combo', 
            name: '焗烤厚片套餐', 
            price: 110, 
            description: '附中杯紅茶',
            options: [
                {
                    name: '口味選擇',
                    choices: [
                        { name: '鮪魚', price: 0 },
                        { name: '燻雞', price: 0 }
                    ]
                }
            ]
        },
        { id: 'c12', category: 'combo', name: '浩克套餐', price: 120, description: '附中杯紅茶' },

        // === 漢堡類 ===
        { id: 'b1', category: 'burger', name: '滿福堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 50 }, { name: '美式堡', price: 55 }, { name: '丹麥堡', price: 65 }] }] },
        { id: 'b2', category: 'burger', name: '培根堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 55 }, { name: '美式堡', price: 60 }, { name: '丹麥堡', price: 70 }] }] },
        { id: 'b3', category: 'burger', name: '香雞堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 55 }, { name: '美式堡', price: 60 }, { name: '丹麥堡', price: 70 }] }] },
        { id: 'b4', category: 'burger', name: '鮪魚堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 55 }, { name: '美式堡', price: 60 }, { name: '丹麥堡', price: 70 }] }] },
        { id: 'b5', category: 'burger', name: '薯餅堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 60 }, { name: '美式堡', price: 65 }, { name: '丹麥堡', price: 75 }] }] },
        { id: 'b6', category: 'burger', name: '燻雞堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 60 }, { name: '美式堡', price: 65 }, { name: '丹麥堡', price: 75 }] }] },
        { id: 'b7', category: 'burger', name: '泰式雞肉堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 60 }, { name: '美式堡', price: 65 }, { name: '丹麥堡', price: 75 }] }] },
        { id: 'b8', category: 'burger', name: '里肌豬排堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 60 }, { name: '美式堡', price: 65 }, { name: '丹麥堡', price: 75 }] }] },
        { id: 'b9', category: 'burger', name: '照燒豬肉堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 60 }, { name: '美式堡', price: 65 }, { name: '丹麥堡', price: 75 }] }] },
        { id: 'b10', category: 'burger', name: '黃金蝦排堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 65 }, { name: '美式堡', price: 70 }, { name: '丹麥堡', price: 80 }] }] },
        { id: 'b11', category: 'burger', name: '檸檬雞柳堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 65 }, { name: '美式堡', price: 70 }, { name: '丹麥堡', price: 80 }] }] },
        { id: 'b12', category: 'burger', name: '沙朗牛排堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 70 }, { name: '美式堡', price: 75 }, { name: '丹麥堡', price: 85 }] }] },
        { id: 'b13', category: 'burger', name: '豬排總匯堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 70 }, { name: '美式堡', price: 75 }, { name: '丹麥堡', price: 85 }] }] },
        { id: 'b14', category: 'burger', name: '香烤雞腿堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 70 }, { name: '美式堡', price: 75 }, { name: '丹麥堡', price: 85 }] }] },
        { id: 'b15', category: 'burger', name: '酥炸豬排堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 75 }, { name: '美式堡', price: 80 }, { name: '丹麥堡', price: 90 }] }] },
        { id: 'b16', category: 'burger', name: '勁辣雞腿堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 75 }, { name: '美式堡', price: 80 }, { name: '丹麥堡', price: 90 }] }] },
        { id: 'b17', category: 'burger', name: '冰島鱈魚堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 75 }, { name: '美式堡', price: 80 }, { name: '丹麥堡', price: 90 }] }] },
        { id: 'b18', category: 'burger', name: '厚切牛肉堡', options: [{ name: '麵包', choices: [{ name: '漢堡', price: 80 }, { name: '美式堡', price: 85 }, { name: '丹麥堡', price: 95 }] }] },

        // === 三明治類 ===
        { id: 's1', category: 'sandwich', name: '烤煎蛋三明治', price: 30 },
        { id: 's2', category: 'sandwich', name: '火腿蛋三明治', price: 40 },
        { id: 's3', category: 'sandwich', name: '起司蛋三明治', price: 40 },
        { id: 's4', category: 'sandwich', name: '肉鬆蛋三明治', price: 45 },
        { id: 's5', category: 'sandwich', name: '香雞蛋三明治', price: 45 },
        { id: 's6', category: 'sandwich', name: '培根蛋三明治', price: 45 },
        { id: 's7', category: 'sandwich', name: '鮪魚蛋三明治', price: 45 },
        { id: 's8', category: 'sandwich', name: '薯餅蛋三明治', price: 50 },
        { id: 's9', category: 'sandwich', name: '里肌蛋三明治', price: 50 },
        { id: 's10', category: 'sandwich', name: '照燒豬肉蛋三明治', price: 55 },
        { id: 's11', category: 'sandwich', name: '咔啦雞腿蛋三明治', price: 65 },
        { id: 's12', category: 'sandwich', name: '起司豬排蛋三明治', price: 65 },
        { id: 's13', category: 'sandwich', name: '法式總匯三明治', price: 65 },
        { id: 's14', category: 'sandwich', name: '豬排總匯三明治', price: 70 },
        { id: 's15', category: 'sandwich', name: '牛排總匯三明治', price: 80 },
        { id: 's16', category: 'sandwich', name: '海陸總匯三明治', price: 90 },
        { id: 's17', category: 'sandwich', name: '卡拉總匯三明治', price: 90 },

        // === 蛋餅類 ===
        { id: 'e1', category: 'eggroll', name: '原味蛋餅', price: 25, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e2', category: 'eggroll', name: '九層塔蛋餅', price: 35, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e3', category: 'eggroll', name: '起司蛋餅', price: 40, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e4', category: 'eggroll', name: '火腿蛋餅', price: 40, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e5', category: 'eggroll', name: '蔬菜蛋餅', price: 40, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e6', category: 'eggroll', name: '玉米蛋餅', price: 40, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e7', category: 'eggroll', name: '培根蛋餅', price: 45, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e8', category: 'eggroll', name: '鮪魚蛋餅', price: 45, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e9', category: 'eggroll', name: '薯餅蛋餅', price: 50, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e10', category: 'eggroll', name: '醬燒豬排蛋餅', price: 50, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },
        { id: 'e11', category: 'eggroll', name: '怪怪蛋餅', price: 55, options: [{ name: '加料', choices: [{ name: '不加', price: 0 }, { name: '加拉絲', price: 20 }] }] },

        // === 鐵板麵加蛋 ===
        { id: 'n1', category: 'noodle', name: '黑胡椒鐵板麵', price: 55 },
        { id: 'n2', category: 'noodle', name: '磨菇鐵板麵', price: 55 },
        { id: 'n3', category: 'noodle', name: '沙茶鐵板麵', price: 55 },
        { id: 'n4', category: 'noodle', name: '肉燥鐵板麵', price: 55 },
        { id: 'n5', category: 'noodle', name: '義大利肉醬麵', price: 65 },
        { id: 'n6', category: 'noodle', name: '宮保雞丁麵', price: 65 },
        { id: 'n7', category: 'noodle', name: '奶油白醬麵', price: 65 },

        // === 墨西哥捲類 ===
        { id: 'r1', category: 'roll', name: '珍珠鮪魚捲', price: 75 },
        { id: 'r2', category: 'roll', name: '義式燻雞捲', price: 75 },
        { id: 'r3', category: 'roll', name: '日式照燒捲', price: 75 },
        { id: 'r4', category: 'roll', name: '德式香腸捲', price: 80 },
        { id: 'r5', category: 'roll', name: '美式咔啦捲', price: 80 },

        // === 點心類 ===
        { id: 'sk1', category: 'snack', name: '熱狗', price: 25 },
        { id: 'sk2', category: 'snack', name: '法國香蒜', price: 30 },
        { id: 'sk3', category: 'snack', name: '起司蛋捲', price: 25 },
        { id: 'sk4', category: 'snack', name: '奶油餐包(2個)', price: 25 },
        { id: 'sk5', category: 'snack', name: '蘿蔔糕', price: 35 },
        { id: 'sk6', category: 'snack', name: '蔥抓餅', price: 35 },
        { id: 'sk7', category: 'snack', name: '黃金炸餃', price: 45 },
        { id: 'sk8', category: 'snack', name: '薯餅(一片)', price: 25 },
        { id: 'sk9', category: 'snack', name: '麥克雞塊', price: 40 },
        { id: 'sk10', category: 'snack', name: '美式脆薯', price: 35 },
        { id: 'sk11', category: 'snack', name: '洋蔥圈', price: 35 },
        { id: 'sk12', category: 'snack', name: '檸檬雞柳條', price: 45 },
        { id: 'sk13', category: 'snack', name: '薯餅蛋塔', price: 45 },
        { id: 'sk14', category: 'snack', name: '芙蓉蛋', price: 35 },

        // === 烤吐司類 ===
        { 
            id: 't1', 
            category: 'toast', 
            name: '巧克力', 
            options: [{ name: '種類', choices: [{ name: '吐司', price: 20 }, { name: '厚片', price: 30 }, { name: '高鈣乳酪餅', price: 35 }, { name: '日式鬆餅', price: 55 }] }] 
        },
        { 
            id: 't2', 
            category: 'toast', 
            name: '花生', 
            options: [{ name: '種類', choices: [{ name: '吐司', price: 20 }, { name: '厚片', price: 30 }, { name: '高鈣乳酪餅', price: 35 }, { name: '日式鬆餅', price: 55 }] }] 
        },
        { 
            id: 't3', 
            category: 'toast', 
            name: '草莓', 
            options: [{ name: '種類', choices: [{ name: '吐司', price: 20 }, { name: '厚片', price: 30 }, { name: '高鈣乳酪餅', price: 35 }, { name: '日式鬆餅', price: 55 }] }] 
        },
        { 
            id: 't4', 
            category: 'toast', 
            name: '奶酥', 
            options: [{ name: '種類', choices: [{ name: '吐司', price: 20 }, { name: '厚片', price: 30 }, { name: '高鈣乳酪餅', price: 35 }, { name: '日式鬆餅', price: 55 }] }] 
        },
        { 
            id: 't5', 
            category: 'toast', 
            name: '香蒜', 
            options: [{ name: '種類', choices: [{ name: '吐司', price: 20 }, { name: '厚片', price: 30 }, { name: '高鈣乳酪餅', price: 35 }, { name: '日式鬆餅', price: 55 }] }] 
        },
        { 
            id: 't6', 
            category: 'toast', 
            name: '奶油', 
            options: [{ name: '種類', choices: [{ name: '吐司', price: 20 }, { name: '厚片', price: 30 }, { name: '高鈣乳酪餅', price: 35 }, { name: '日式鬆餅', price: 55 }] }] 
        },

        // === 可頌類 ===
        { id: 'cr1', category: 'croissant', name: '煉乳可頌', price: 50 },
        { id: 'cr2', category: 'croissant', name: '焦糖可頌', price: 50 },
        { id: 'cr3', category: 'croissant', name: '起司嫩蛋可頌', price: 65 },
        { id: 'cr4', category: 'croissant', name: '嫩煎燻雞可頌', price: 70 },

        // === 冷熱飲 ===
        { 
            id: 'd1', category: 'drink', name: '紅茶', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 25 }, { name: '中杯', price: 20 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd2', category: 'drink', name: '無糖綠茶', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 25 }, { name: '中杯', price: 20 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd3', category: 'drink', name: '奶茶', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 25 }, { name: '中杯', price: 20 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd4', category: 'drink', name: '豆漿', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 30 }, { name: '中杯', price: 25 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd5', category: 'drink', name: '柳橙汁', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 30 }, { name: '中杯', price: 25 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd6', category: 'drink', name: '檸檬紅茶', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 30 }, { name: '中杯', price: 25 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd7', category: 'drink', name: '可爾必思', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 30 }, { name: '中杯', price: 25 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd8', category: 'drink', name: '焦糖奶茶', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 35 }, { name: '中杯', price: 30 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd9', category: 'drink', name: '咖啡', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 35 }, { name: '中杯', price: 30 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd10', category: 'drink', name: '鮮奶茶', 
            options: [
                { name: '容量', choices: [{ name: '大杯', price: 40 }, { name: '中杯', price: 35 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd11', category: 'drink', name: '可可亞', 
            options: [
                { name: '容量', choices: [{ name: '中杯', price: 35 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        },
        { 
            id: 'd12', category: 'drink', name: '研磨咖啡', 
            options: [
                { name: '容量', choices: [{ name: '中杯', price: 40 }] },
                { name: '溫度', choices: [{ name: '冰', price: 0 }, { name: '涼', price: 0 }, { name: '溫', price: 0 }, { name: '熱', price: 0 }] }
            ] 
        }
    ]
};

window.menuData = menuData;
