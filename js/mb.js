 window.onload = function(){

 /*	document.querySelector('.galery').onclick = function(){
 		this.className += ' animated';*/
 		var showed =false;

 		document.onscroll = function(){
 			console.log(window.pageYOffset + window.innerHeight);

 			if(!showed && sum > 1300){
 				showed = true;
 				document.querySelector('.galery').className += ' animated';
 			}
 		}
 	
 }