new Vue({
	el: '.counter',
 data: {
   count:1,
   price:585
 },
 methods: {
  adder: function () {
	 this.count++;
   },
  minuser: function (event) {
	if(this.count<=0){
		this.count=0;
	}else{
		this.count--;
	}
   },
   total: function(){
	   return count*price;
   }
 }
});
