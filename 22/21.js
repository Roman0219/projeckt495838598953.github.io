/*var button_plus = document.querySelector(".frame .div .plus");
var button_x = document.querySelector(".frame .div .x");
var points = document.querySelector(".frame .points");
var win = document.querySelector(".frame .win_or_lose");
var player = document.querySelector(".frame .player");
var playergame = document.querySelector(".frame .game");

var i = 0;
var b = 0;


var res = 0;*/


/* var name = prompt("Как вас зовут?");
 player.innerHTML = name;

/*заблокировать кнопку можно с помощью метода .disabled = true;*/
/* i1 = (Math.random() * (21 - 15) + 15);
 b1 = Math.round(i1);
var game = b1;
playergame.innerHTML = b1;

button_plus.onclick = function(){
 i = (Math.random() * (11 - 2) + 2);
 b = Math.round(i);

res+=b;
points.innerHTML = res;
if(res == 21){
	win.innerHTML = "win";
	plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);

}

if(res > 21){
	win.innerHTML = "lose";
	button_plus.disabled = true;
	button_x.disabled = true;
	setTimeout(mama, 2000);
	
}

if(res > game && res<=21){
	win.innerHTML = "Win";
	button_plus.disabled = true;
	button_x.disabled = true;
	setTimeout(mama, 2000);
}


 }

 function mama(){
	location.reload()
 }


 button_x.onclick = function(){   /*error*/
 /*	if(res>game && res<=21){
 		win.innerHTML = "Win";
 		button_plus.disabled = true;
	button_x.disabled = true;
 		setTimeout(mama, 2000);
 	}

 	if(res<game){
 		win.innerHTML = "Lose";
 		button_plus.disabled = true;
	button_x.disabled = true;
 		setTimeout(mama, 2000);
 	}

 	if(res == game){
 		win.innerHTML = "Ничья";
 		button_plus.disabled = true;
	button_x.disabled = true;
 		setTimeout(mama, 2000);
 	}

 	if(res == 21 && res!=game){
 		win.innerHTML = "Win";
 		button_plus.disabled = true;
	button_x.disabled = true;
 		setTimeout(mama, 2000);
 	}


 }

*/


var dama = document.querySelector(".frame .point_three .dama");
var valet = document.querySelector(".frame .point_three .valet");
var korol = document.querySelector(".frame .point_three .korol");
var tuz = document.querySelector(".frame .point_three .tuz");
var k6 = document.querySelector(".frame .point_three .k6");
var k7 = document.querySelector(".frame .point_three .k7");
var k8 = document.querySelector(".frame .point_three .k8");
var k9 = document.querySelector(".frame .point_three .k9");
var k10 = document.querySelector(".frame .point_three .k10");


var plus = document.querySelector(".frame .plus");
var x = document.querySelector(".frame .x");

/*var i = (Math.random() * (11 - 2) + 2);
var b = Math.round(i);
*/
var d = document.querySelector(".div");
var points1 = document.querySelector(".frame .points1");
var points2 = document.querySelector(".frame .points2")
var i = 0;
var b = 0;

var i1;
var b1;
	 i1 = (Math.random() * (21 - 16) + 16);
	 b1 = Math.round(i1);
points2.innerHTML = b1;


var res = 0;
plus.onclick = function(){
	/* i = (Math.random() * (6 - 2) + 2);
	 b = Math.round(i);*/
	 i = (Math.random() * (11 - 2) + 2);
	 b = Math.round(i)

	if(b == 5){
		b = 6;
	}
	 res+=b;
	 points1.innerHTML = res;
	


	if(b == 2){
		valet.style.zIndex = '1';
		dama.style.zIndex  = '0';
		korol.style.zIndex = '0';
		k6.style.zIndex = '0';
		k7.style.zIndex = '0';
		k8.style.zIndex = '0';
		k9.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';

	}
	if(b == 3){
		dama.style.zIndex = '1';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';
		k6.style.zIndex = '0';
		k7.style.zIndex = '0';
		k8.style.zIndex = '0';
		k9.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';

	}
	if(b == 4){
		korol.style.zIndex = '1';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		k6.style.zIndex = '0';
		k7.style.zIndex = '0';
		k8.style.zIndex = '0';
		k9.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';

	}
	if(b == 6){
		k6.style.zIndex = '1';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';
		k7.style.zIndex = '0';
		k8.style.zIndex = '0';
		k9.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';


	}
	if(b == 7){
		k7.style.zIndex = '1';
		k6.style.zIndex = '0';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';
		k8.style.zIndex = '0';
		k9.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';

	}
	if(b == 8){
		k8.style.zIndex = '1';
		k7.style.zIndex = '0';
		k6.style.zIndex = '0';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';
		k9.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';


	}
	if(b == 9){
		k9.style.zIndex = '1';
		k8.style.zIndex = '0';
		k7.style.zIndex = '0';
		k6.style.zIndex = '0';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';
		k10.style.zIndex = '0';
		tuz.style.zIndex = '0';

	}
	if(b == 10){
		k10.style.zIndex = '1';
		k9.style.zIndex = '0';
		k8.style.zIndex = '0';
		k7.style.zIndex = '0';
		k6.style.zIndex = '0';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';
		tuz.style.zIndex = '0';

	}

	if(b == 11){
		tuz.style.zIndex = '1';
		k10.style.zIndex = '0';
		k9.style.zIndex = '0';
		k8.style.zIndex = '0';
		k7.style.zIndex = '0';
		k6.style.zIndex = '0';
		dama.style.zIndex = '0';
		valet.style.zIndex = '0';
		korol.style.zIndex = '0';

	}





	if(res>21 && b1<=21){
		d.innerHTML = "Lose!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}
	if(res<=21 && b1>21){
		d.innerHTML = "Lose!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}
	if(res == 21 && b1!=21){
		d.innerHTML = "Win!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}



}


x.onclick = function(){
	if(res<b1 && res<=21){
		d.innerHTML = "Lose!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}
	if(res>21 && b1<=21){
		d.innerHTML = "Lose!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}

	if(res>b1 && res<=21){
		d.innerHTML = "Win!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}
	if(res<=21 && b1>21){
		d.innerHTML = "Win!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}
	if(res == b1){
		d.innerHTML = "Draw!";
		plus.disabled = true;
	x.disabled = true;
	setTimeout(mama, 2000);
	}



}


function mama(){
	location.reload();
}



var newgame = document.querySelector(".new_game");
var frame = document.querySelector(".frame");
newgame.onclick = function(){
	newgame.style.display = 'none';
	frame.style.display = 'block';
}

