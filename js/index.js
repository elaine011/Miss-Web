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
                img:'https://img.shop.com/Image/270000/275600/275616/products/lg_1735632476__800x800__.jpg'
            },
            {
                id:'2', 
                name: '去骨雞腿排', 
                price: '75', 
                category: '肉', 
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKRNyhSPcIyPmtuHOI7-2kFSm7qgR2syzGQ&usqp=CAU'
            },
            {
                id:'3', 
                name: '霜降豬肉', 
                price: '88', 
                category: '肉', 
                img:'https://cdn.cybassets.com/media/W1siZiIsIjExMzA2L3Byb2R1Y3RzLzI2MzU2MjQ4L-eUoumKt-mcnOmZjeixrF9jMDIxNTBjYjI0NDVmZGIwZjhlZS5qcGVnIl0sWyJwIiwidGh1bWIiLCI2MDB4NjAwIl1d.jpeg?sha=eea319d7eea0f856'
            },
            {
                id:'4', 
                name: '台灣豬肉火鍋肉片', 
                price: '130', 
                category: '肉', 
                img:'data:image/jpeg;base64,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'
            },
            {
                id:'5', 
                name: '冷藏雞里肌肉', 
                price: '90', 
                category: '肉', 
                img:'https://image.azureedge.net/0239680_300g-_S.png'
            },
            {
                id:'6', 
                name: '冷藏客家鹹豬肉', 
                price: '125', 
                category: '肉', 
                img:'https://img.shop.com/Image/270000/275600/275616/products/lg_1735629947__800x800__.jpg'
            },
            {
                id:'7', 
                name: '新鮮雞蛋', 
                price: '62', 
                category: '蛋', 
                img:'https://i.pinimg.com/originals/a3/c9/2f/a3c92f59bf76f88792878c0a08272c52.png'
            },
            {
                id:'8', 
                name: '鹹蛋', 
                price: '89', 
                category: '蛋', 
                img:'../img/鹹蛋.jpg'
            },
            {
                id:'9', 
                name: '皮蛋', 
                price: '89', 
                category: '蛋', 
                img:'https://resource01-proxy.ulifestyle.com.hk/res/v3/image/content/2325000/2326405/egg2_1024.jpg'
            },
            {
                id:'10', 
                name: '青蔥', 
                price: '39', 
                category: '蔬菜', 
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwFZUqfNoCHcPcrdjW2uPeCTeFusewPYmJg&usqp=CAU'
            },
            {
                id:'11', 
                name: '有機紅蘿蔔', 
                price: '39', 
                category: '蔬菜', 
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLM5I5uk-CyqJWYg4LrZRlv-FoQN19tC4pGg&usqp=CAU'
            },
            {
                id:'12', 
                name: '有機馬鈴薯', 
                price: '59', 
                category: '蔬菜', 
                img:'https://image-cdn-flare.qdm.cloud/q56e767ea6c206/image/cache/data/2019/04/16/b22c17f263b8beaadd9e6579d35f130e-max-w-1024.jpg'
            },
            {
                id:'13', 
                name: '進口洋蔥', 
                price: '49', 
                category: '蔬菜', 
                img:'https://www.costco.com.tw/medias/sys_master/images/hb7/h2b/33857916633118.jpg'
            },
            {
                id:'14', 
                name: '蘆筍', 
                price: '45', 
                category: '蔬菜', 
                img:'https://s.yimg.com/ut/api/res/1.2/r.mQzWolTQF3hPksnHgtrA--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTEwMDt3PTYwMA--/https://s.yimg.com/fy/73f6/item/p05301864915-item-0b99xf4x0600x0600-m.jpg'
            },
            {
                id:'15', 
                name: '有機高麗菜', 
                price: '69', 
                category: '蔬菜', 
                img:'../img/高麗菜.jpeg'
            },
            {
                id:'16', 
                name: '有機櫛瓜', 
                price: '115', 
                category: '蔬菜', 
                img:'https://img.shop.com/Image/270000/275600/275616/products/lg_1747601322__800x800__.jpg'
            },
            {
                id:'17', 
                name: '絲瓜', 
                price: '33', 
                category: '蔬菜', 
                img:'https://kmweb.coa.gov.tw/files/production_map/133/A01_1_m.jpg'
            },
            {
                id:'18', 
                name: '大白菜', 
                price: '49', 
                category: '蔬菜', 
                img:'https://life.tw/upload_file/53/content/98069de6-5ee9-f22f-daba-1dbc15a7766e.png'
            },
            {
                id:'19', 
                name: '老薑', 
                price: '39', 
                category: '蔬菜', 
                img:'https://img.ltn.com.tw/Upload/food/page/2017/02/27/170227-5400-11-RVWn6.jpg'
            },
            {
                id:'20', 
                name: '美國空運進口酪梨', 
                price: '138', 
                category: '水果', 
                img:'../img/酪梨.jpeg'
            },
            {
                id:'21', 
                name: '紐西蘭富士蘋果', 
                price: '72', 
                category: '水果', 
                img:'../img/蘋果.jpeg'
            },
            {
                id:'22', 
                name: '木瓜', 
                price: '39', 
                category: '水果', 
                img:'../img/木瓜.jpeg'
            },
            {
                id:'23', 
                name: '牛蕃茄', 
                price: '45', 
                category: '水果', 
                img:'../img/牛番茄.jpeg'
            },
            {
                id:'24', 
                name: '台灣香蕉', 
                price: '75', 
                category: '水果', 
                img:'../img/香蕉.jpeg'
            },
            {
                id:'25', 
                name: 'Zespri 綠奇異果', 
                price: '129', 
                category: '水果', 
                img:'../img/奇異果.jpeg'
            },
            {
                id:'26', 
                name: '進口柳橙', 
                price: '100', 
                category: '水果', 
                img:'../img/柳橙.jpeg'
            },
            {
                id:'27', 
                name: '冷凍白蝦', 
                price: '99', 
                category: '海鮮', 
                img:'../img/冷凍白蝦.jpeg'
            },
            {
                id:'28', 
                name: '白蝦仁', 
                price: '149', 
                category: '海鮮', 
                img:'../img/白蝦仁.png'
            },
            {
                id:'29', 
                name: '熟凍全殼淡菜', 
                price: '179', 
                category: '海鮮', 
                img:'../img/淡菜.png'
            },
            {
                id:'30', 
                name: '澎湖白秋蝦仁', 
                price: '239', 
                category: '海鮮', 
                img:'../img/澎湖蝦仁.jpeg'
            },
            {
                id:'31', 
                name: '台灣草蝦', 
                price: '389', 
                category: '海鮮', 
                img:'../img/台灣草蝦.jpeg'
            },
            {
                id:'32', 
                name: '海鹽法國麵包', 
                price: '39', 
                category: '麵包', 
                img:'../img/法國麵包1.jpeg'
            },
            {
                id:'33', 
                name: '冰心維也納麵包', 
                price: '29', 
                category: '麵包', 
                img:'../img/冰心維也納麵包.jpeg'
            },
            {
                id:'34', 
                name: '羅宋麵包', 
                price: '30', 
                category: '麵包', 
                img:'../img/羅宋麵包.jpeg'
            },
            {
                id:'35', 
                name: '克林姆麵包', 
                price: '22', 
                category: '麵包', 
                img:'../img/克林姆麵包.jpeg'
            },
            {
                id:'36', 
                name: '古早味三顆蔥麵包', 
                price: '22', 
                category: '麵包', 
                img:'../img/三顆蔥麵包.jpeg'
            },
            {
                id:'37', 
                name: '手工牛角麵包', 
                price: '22', 
                category: '麵包', 
                img:'../img/牛角麵包.jpeg'
            },
            {
                id:'38', 
                name: '香菇', 
                price: '39', 
                category: '其他', 
                img:'../img/香菇.png'
            },
            {
                id:'39', 
                name: '大漢傳統板豆腐', 
                price: '29', 
                category: '其他', 
                img:'../img/板豆腐.jpeg'
            },
            {
                id:'40', 
                name: '中華水果豆花', 
                price: '36', 
                category: '其他', 
                img:'../img/中華豆花.jpeg'
            },
            {
                id:'41', 
                name: '茉莉茶凍', 
                price: '58', 
                category: '其他', 
                img:'../img/茉莉茶凍.jpeg'
            },
            {
                id:'42', 
                name: '義美無加糖豆奶', 
                price: '54', 
                category: '其他', 
                img:'../img/豆奶.jpeg'
            },
            {
                id:'43', 
                name: '金針菇', 
                price: '39', 
                category: '其他', 
                img:'../img/金針菇.png'
            },
            {
                id:'44', 
                name: '維力炸醬麵', 
                price: '77', 
                category: '其他', 
                img:'../img/維力炸醬麵.jpeg'
            },
            {
                id:'45', 
                name: '台酒花雕雞麵', 
                price: '129', 
                category: '其他', 
                img:'../img/花雕雞麵.png'
            },
            {
                id:'46', 
                name: '有機黑木耳', 
                price: '89', 
                category: '其他', 
                img:'../img/木耳.png'
            },
            {
                id:'47', 
                name: '有機杏鮑菇', 
                price: '39', 
                category: '其他', 
                img:'../img/杏鮑菇.jpg'
            }
        ],
        filter: false,
        cart: {
            string: 'Cart',
            total: 0.00,
            products: [],
            show: false
          }
    }
});

Vue.component('cart-item', {
    props: ['product'],
    template: '#cart-item-template'
  });
  
  Vue.component('product-item', {
    props: ['product'],
    template: '#product-item-template',  
    methods: {
      addToCart: function (id) {  
        
        // get product
        var product = store.products[id];      
        
        // place product in cart
        store.cart.products.push(product);
        
        // update cart
        store.cart.total += product.price;
        
        // update
        alert('Adding ' + product.title + ' to cart');
      }
    }
  });
