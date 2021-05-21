let app = new Vue({
    el:'#app',
    data:{
        products:[
            {
                id:'0', 
                name: '牛肉片', 
                price: '699', 
                category: '肉', 
                img:'https://s.yimg.com/zp/images/4C1E80B8803447128535D7B954E6514DBD1EABFF'
            },
            {
                id:'1', 
                name: '冷凍豬瘦肉絞肉', 
                price: '80', 
                category: '肉', 
                img:'https://imgur.com/X1SP9es'
            },
            {
                id:'2', 
                name: '去骨雞腿排', 
                price: '75', 
                category: '肉', 
                img:'https://imgur.com/p6nSSl5'
            },
            {
                id:'3', 
                name: '霜降豬肉', 
                price: '88', 
                category: '肉', 
                img:'https://imgur.com/31gbW2L'
            },
            {
                id:'4', 
                name: '台灣豬肉火鍋肉片', 
                price: '130', 
                category: '肉', 
                img:'https://imgur.com/3aunUhL'
            },
            {
                id:'5', 
                name: '冷藏雞里肌肉', 
                price: '90', 
                category: '肉', 
                img:'https://imgur.com/UDMD2rK'
            },
            {
                id:'6', 
                name: '冷藏客家鹹豬肉', 
                price: '125', 
                category: '肉', 
                img:'https://imgur.com/BOegn3V'
            },
            {
                id:'7', 
                name: '新鮮雞蛋', 
                price: '62', 
                category: '蛋', 
                img:'https://imgur.com/AuWYexM'
            },
            {
                id:'8', 
                name: '鹹蛋', 
                price: '89', 
                category: '蛋', 
                img:'https://imgur.com/YVJnwUY'
            },
            {
                id:'9', 
                name: '皮蛋', 
                price: '89', 
                category: '蛋', 
                img:'https://imgur.com/ZCEIB5U'
            },
            {
                id:'10', 
                name: '青蔥', 
                price: '39', 
                category: '蔬菜', 
                img:'https://imgur.com/x8gS6Ra'
            },
            {
                id:'11', 
                name: '有機紅蘿蔔', 
                price: '39', 
                category: '蔬菜', 
                img:'https://imgur.com/undefined'
            },
            {
                id:'12', 
                name: '有機馬鈴薯', 
                price: '59', 
                category: '蔬菜', 
                img:'https://imgur.com/tg2Nq7g'
            },
            {
                id:'13', 
                name: '進口洋蔥', 
                price: '49', 
                category: '蔬菜', 
                img:'https://imgur.com/1mIcDN9'
            },
            {
                id:'14', 
                name: '蘆筍', 
                price: '45', 
                category: '蔬菜', 
                img:'https://imgur.com/ZCo3qE0'
            },
            {
                id:'15', 
                name: '有機高麗菜', 
                price: '69', 
                category: '蔬菜', 
                img:'https://imgur.com/jRxUjVf'
            },
            {
                id:'16', 
                name: '有機櫛瓜', 
                price: '115', 
                category: '蔬菜', 
                img:'https://imgur.com/pebqX6q'
            },
            {
                id:'17', 
                name: '絲瓜', 
                price: '33', 
                category: '蔬菜', 
                img:'https://imgur.com/TdrBrUe'
            },
            {
                id:'18', 
                name: '大白菜', 
                price: '49', 
                category: '蔬菜', 
                img:'https://imgur.com/4BOjDg9'
            },
            {
                id:'19', 
                name: '老薑', 
                price: '39', 
                category: '蔬菜', 
                img:'https://imgur.com/pcTdBRp'
            }
        ],
        filter: false
    }
})