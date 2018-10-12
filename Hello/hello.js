var options = {
  valueNames: [ 'name', 'born' ]
};

var userList = new List('users', options); 
/*
window.onload=function() {
  horloge('div_horloge');
};

function actualiser() {
var date = new Date();
var str = date.getHours();
str += ':'+(date.getMinutes()<10?'0':'')+date.getMinutes();
el.innerHTML = str;
}
	  
function horloge(el) {
  if(typeof el=="string") { el = document.getElementById(el); }
  actualiser();
  setInterval(actualiser,1000);
}*/
