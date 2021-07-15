
let app = new Vue({
    el: "#app",
    data: {
      itemList: [
        {
            id:'1',
            name:'牛肉片',
            imgUrl:'https://s.yimg.com/zp/images/4C1E80B8803447128535D7B954E6514DBD1EABFF',
            price:'699',
            count:'1'
        },
        {
          id:'2',
          name:'冷凍豬瘦肉絞肉',
          imgUrl:'https://img.shop.com/Image/270000/275600/275616/products/lg_1735632476__800x800__.jpg',
          price:'80',
          count:'1'
      }
      ],
      count: 0,
      total3: 0
    },
    methods: {
      handleSub: function (item) {
        if (item.count >= 1) {
          item.count--;
        }
      },
      handlePlus: function (item) {
        console.log("item:", item);
        item.count++;
      },
      delHandler: function (index) {
        console.log(index);
        this.itemList.splice(index, 1);
      }
    },
    computed: {
      // 自動算總額
      total: {
        get() {
          let total = 0;
          this.itemList.forEach((item) => {
            console.log(item.price * item.count);
            total += item.price * item.count;
            // total.toString();
            console.log("計算全部(get):", total);
          });
  
          return total;
        }
        // val就是get平常返回的值
        // html值input往回打時
        // set(val) {
        //     this.total3 = val;
        //     console.log('set:', this.total3);
  
        // }
      }
    }
  });
  
  console.log("外部抓取:", app.total);
  
  console.log("外部抓取3:", app.$data.count);
  

  // checkbox商品全選
function check_all(obj,cName)
{
    var checkboxs = document.getElementsByName(cName);
    for(var i=0;i<checkboxs.length;i++){
        checkboxs[i].checked = obj.checked;
    }
}
