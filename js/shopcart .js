
let app = new Vue({
    el: "#app",
    data: {
      itemList: [
        {
            id:'1',
            name:'Murdock Lodon Bread Shampoo 250ML',
            imgUrl:'https://images.unsplash.com/photo-1599447068894-089fabc9876c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price:'500',
            count:'2'
        },
        {
            id:'2',
            name:'橘子',
            imgUrl:'https://images.unsplash.com/photo-1576181178011-b03109fcc81d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
            price:'5',
            count:'3'
        },
        {
            id:'3',
            name:'馬卡龍',
            imgUrl:'https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price:'8',
            count:'1'
        },
        {
            id:'4',
            name:'漢堡',
            imgUrl:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
            price:'40',
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
