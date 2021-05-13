var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'Murdock Lodon Bread Shampoo 250ML',
            imgUrl:'https://images.unsplash.com/photo-1599447068894-089fabc9876c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price:'500',
            count:'2'
          },
          {
            id:'2',
            itemName:'橘子',
            imgUrl:'https://images.unsplash.com/photo-1576181178011-b03109fcc81d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
            price:'5',
            count:'3'
          },
          {
            id:'3',
            itemName:'馬卡龍',
            imgUrl:'https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            price:'8',
            count:'1'
          },
          {
            id:'4',
            itemName:'漢堡',
            imgUrl:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80',
            price:'40',
            count:'1'
          },
        ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        },
    },
    computed:{
        totalPrice() {
            var total = 0;
            this.itemList.forEach((v, k) => {
                if (this.itemList.indexOf(v.id)!=-1)
                    total += v.count * v.price;
            });
            return total;
        }
    }
})

// checkbox商品全選
function check_all(obj,cName)
        {
            var checkboxs = document.getElementsByName(cName);
            for(var i=0;i<checkboxs.length;i++){
                checkboxs[i].checked = obj.checked;
            }
        }
