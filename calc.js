function add(){
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	 var result = parseInt(x) + parseInt(y);
	 
if(!isNaN(result)){
		document.getElementById("num3").innerText = 'Output is   '   + result;

	
}
}

function sub(){
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	 var result = parseInt(x) - parseInt(y);
	 
if(!isNaN(result)){
		document.getElementById("num3").innerText = 'Output is   '   + result;
}
}
function multiply(){
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	 var result = parseInt(x)*parseInt(y);
	 
if(!isNaN(result)){
		document.getElementById("num3").innerHTML = 'Output is  '   + result;
}
}
function divide(){
	var x = document.getElementById('num1').value;
	var y = document.getElementById('num2').value;
	 var result = parseInt(x)/parseInt(y);
	 
if(!isNaN(result)){
	document.getElementById("num3").innerHTML = 'Output is  '   + result;
}
}


function hello(){

console.log("hello")
}

