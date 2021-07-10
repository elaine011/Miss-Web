let app = new Vue({
    el:'#app',
    data:{
        products:[
            {
                id:'0',
                name:'米乃藏煎餅',
                price:'50',
                category:'零嘴',
                img:'../img/家裡物資_210527_0.jpg',
                distance:'120'
            },
            {
                id:'1',
                name:'千層蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_1.jpg',
                distance:'120'
            },
            {
                id:'2',
                name:'草莓蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_2.jpg',
                distance:'120'
            },
            {
                id:'3',
                name:'蔓越莓蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_3.jpg',
                distance:'120'
            },
            {
                id:'4',
                name:'草莓千層蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_4.jpg',
                distance:'120'
            },
            {
                id:'5',
                name:'巧克力蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_5.jpg',
                distance:'120'
            },
            {
                id:'6',
                name:'核桃巧克力蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_6.jpg',
                distance:'120'
            },
            {
                id:'7',
                name:'黑森林蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_7.jpg',
                distance:'120'
            },
            {
                id:'8',
                name:'草莓奶油蛋糕',
                price:'100',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_8.jpg',
                distance:'120'
            },
            {
                id:'9',
                name:'草莓波士頓',
                price:'90',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_9.jpg',
                distance:'120'
            },
            {
                id:'10',
                name:'oreo蛋糕',
                price:'150',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_10.jpg',
                distance:'120'
            },
            {
                id:'11',
                name:'樂事餅乾組',
                price:'60',
                category:'零嘴',
                img:'../img/家裡物資_210527_11.jpg',
                distance:'120'
            },
            {
                id:'12',
                name:'滿漢大餐(單包)',
                price:'25',
                category:'其他',
                img:'../img/家裡物資_210527_12.jpg',
                distance:'120'
            },
            {
                id:'13',
                name:'滿漢大餐(開封過)',
                price:'70',
                category:'其他',
                img:'../img/家裡物資_210527_13.jpg',
                distance:'120'
            },
            {
                id:'14',
                name:'滿漢大餐',
                price:'75',
                category:'其他',
                img:'../img/家裡物資_210527_14.jpg',
                distance:'120'
            },
            {
                id:'15',
                name:'雀巢全脂牛奶',
                price:'45',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_15.jpg',
                distance:'120'
            },
            {
                id:'16',
                name:'香蕉',
                price:'40',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_0_0.jpg',
                distance:'120'
            },
            {
                id:'17',
                name:'哈密瓜',
                price:'150',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_1_0.jpg',
                distance:'120'
            },
            {
                id:'18',
                name:'白吐司',
                price:'30',
                category:'生鮮食品',
                img:'../img/家裡物資_210527_2_0.jpg',
                distance:'120'
            },
            {
                id:'19',
                name:'密蘭諾黑巧酥',
                price:'60',
                category:'零嘴',
                img:'../img/家裡物資_210527_3_0.jpg',
                distance:'120'
            },
            {
                id:'20',
                name:'義美小泡芙',
                price:'60',
                category:'零嘴',
                img:'../img/家裡物資_210527_4_0.jpg',
                distance:'120'
            },
            {
                id:'21',
                name:'波的多餅乾',
                price:'60',
                category:'零嘴',
                img:'../img/家裡物資_210527_5_0.jpg',
                distance:'120'
            },
            {
                id:'22',
                name:'蚵仔煎餅乾',
                price:'60',
                category:'零嘴',
                img:'../img/家裡物資_210527_6_0.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'睫毛復活液',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_0_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'innisfree口紅',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_1_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:' Maybelline口紅',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_2_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'Yubico指甲油',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_3_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'無印洗面乳',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_4_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'Cetaphil乳液',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_5_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'Crest牙膏',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_6_1.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'Dr.Huang 眼霜',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_7_0.jpg',
                distance:'120'
            },
            {
                id:'24',
                name:'innisfree護手霜',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_8_0.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'ck香水',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_9_0.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'各種顏色的筆芯',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_10_0.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'行動電源',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_11_0.jpg',
                distance:'120'
            },
            {
                id:'23',
                name:'hp印表機墨水',
                price:'60',
                category:'生活用品',
                img:'../img/家裡物資_210527_12_0.jpg',
                distance:'120'
            }
        ],
        filter: false
    }
});

// AD輪播
window.onload = function() {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var container = document.getElementById('container');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var index = 1;

    // 為輪播圖片增加切換的動畫效果
    function animate(offset) {
        /*獲取的style.left，是相對左邊獲取距離，所以第一張圖後style.left都為負值*/
        /*且style.left獲取的是字串，需要用parseInt()取整轉化為數字。*/
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
		list.style.transition='300ms ease';
        /*當left值小於4400時，因為沒有第6張圖片就出現空白，所以這裡我們需要對偏移量做一個判斷。應該在animate函式內加上*/
        if(newLeft < -4400){
        	list.style.left = 0 + 'px';
        }
        if(newLeft > 0){
        	list.style.left = -4400 + 'px';
        }
    }

    // 在這我們需要滑鼠移出圖片範圍，每隔指定時間就切換到下一張圖片。
	var timer;//設定定時器
	function autoplay(){
        /*setInterval返回的是定時器的ID*/
		timer = setInterval(function(){
			next.onclick()
		},4000);
	}
	autoplay();

    // 當滑鼠移入圖片範圍時，清除定時器
	function stopplay(){
		clearInterval(timer);
	}

    // 切換到某一張圖片時，底部的按鈕樣式也跟著改變
	function showButton(){
		//清除之前的样式
		for(let i = 0;i<buttons.length;i++){
			if(buttons[i].className == 'on'){
				buttons[i].className = '';
			}
		}
		buttons[index-1].className = 'on';
	}
	prev.onclick = function() {   
		index-=1;
		if(index < 1){
			index = 6;
		}
		showButton();
    	animate(8800);
    }
    next.onclick = function() {  
    	index+=1;
    	if(index > 6){
    		index = 1;
    	}
    	showButton();
        animate(-880);
    }

    // 點選按鈕即會切換到相應位置的圖片
    for(var i = 0;i<buttons.length;i++){
    	buttons[i].onclick = function() {
    		var clickIndex = parseInt(this.getAttribute('index'));
    		var offset = 880*(index - clickIndex);
			animate(offset);
			index = clickIndex;
			showButton();
        }
    }
    container.onmouseover = stopplay;
	container.onmouseout = autoplay;
}