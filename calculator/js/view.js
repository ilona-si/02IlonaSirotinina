var input = document.getElementById('input');
var oper = document.getElementsByClassName("op");
var systems = document.getElementsByClassName("systems");
var view = "";
var op="",y="",x="";
var btn = document.getElementsByTagName("button");
var bool = true;
var fl = true;
trig = document.getElementsByClassName("trig");

for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click',function(){

		if (this.name=="π") {
			this.name = Math.PI;
		}
		if (this.name=="e") {
			this.name = Math.E;
		}
		if (this.name=="ln2") {
			this.name = Math.LN2;
		}

	switch(this.className){
		case "op":
			bool = false;
			if (fl) {
				fl=false;
			}else{
				findVar();
			}
			op = this["name"];	
			break;
		case "trig":
			bool = false;
		// view = this.value+"("+x+")";
			op = this["name"];
			findVar();
			break;
		case "systems":
			bool = false;
			op = this["name"];
			findVar();
			break;
		case "rez":
			findVar();
			fl=true;
			break;
		case "reset":
			bool = true;
			fl = true;
			input.innerHTML="";
			view="";
			x="";
			y="";
			op="";
			for (var i = 0; i < btn.length; i++) {
				btn[i].disabled = false;
			}
			break;
		default:
			if(bool){
				console.log("before"+x);
				x = x+this.name;
				console.log("after"+x);
			}else{
				y = y+this.name;
			}
			break;
	}
	view = view+this.value;
	input.innerHTML=view;
	})
}



function findVar(){
	console.log("findvar");
		x=x*1;
		y=y*1;
		console.log("x"+x);
		console.log("y"+y);
		console.log("op"+op);
		console.log("rez switch " + operation(op,x,y));
		input.innerHTML = operation(op,x,y);
		view = operation(op,x,y);
		x=operation(op,x,y);
		y="";
		fl=false;
}
 
function operation(op,x,y){
switch(op) {
    case "+":
        return x+y;
        break;
    case "-":
        return x-y;
        break;
    case "/":
        return x/y;
        break;
    case "*":
        return x*y;
        break;
    case "div":
        return Math.floor(x/y);
        break;
    case "mod":
		block();
    	r=x-(Math.floor(x/y)*y);	
        return Math.floor(x/y)+"   остаток :  "+ r;
        break;
    case "square":
        return Math.pow(x,2);
        break;
    case "cube":
        return Math.pow(x,3);
        break;
    case "sin":
        return Math.sin(x * Math.PI / 180);
        break;
    case "cos":
        return Math.cos(x * Math.PI / 180);
        break;
    case "tan":
        return Math.tan(x * Math.PI / 180);
        break;
    case "cot":
        return 1/(Math.tan(x * Math.PI / 180));
        break;
    case "log":
        return Math.log(x)/Math.log(y);
        break;
    case "pow":
        // return teilor(x-1,y);
        return Math.pow(x,y);
        break;
    case "sqrt":
       // return teilor(x-1,(1/y));
        return Math.pow(x,(1/y));
        break;
    case "bin":
        return notation(x,2);
        break;
    case "oct":
        return notation(x,8);
        break;
    case "sixteen":
        return notation(x,16);
        break;
    case "abs":
        return Math.abs(x); 
        break;  
    case "reverse":
    	return 1/x;                     
    default:
        break;
	}
}

function teilor(m,x) {
	for (var i = 1; i <= 12; i++) {
		rez=sum(i,m,x);
	}
	return rez+1;
}
function sum(n,m,x){
	mult=1;
	for (var i = 1; i <=n; i++) {
		mult=mult*(m-i+1);
	}
	return mult*Math.pow(x,n)/fact(n);
}

function fact(n){
	if(n!=1){
 		return n*fact(n-1);
 	}else return 1;
 	
}

function notation(x,n){
	n=n*1;
	var myNumber = x;
	return myNumber.toString(n);    
}

function block(){
	for (var i = 0; i < btn.length; i++) {
		btn[i].disabled = true;
	}
	reset.disabled = false;
}
// function blockNum(){
// 	for (var i = 0; i < btn.length; i++) {
// 		btn[i].disabled = true;
// 	}
// 	for (var i = 0; i < oper.length; i++) {
// 		oper[i].disabled = false;
// 	}
// 	for (var i = 0; i < trig.length; i++) {
// 		trig[i].disabled = false;
// 	}
// 	reset.disabled = false;
// }
// function blockOFF(){
// 	for (var i = 0; i < btn.length; i++) {
// 		btn[i].disabled = false;
// 	}
// }
// function blockOP(){
// 	for (var i = 0; i < oper.length; i++) {
// 		oper[i].disabled =true;
// 	}
// 	for (var i = 0; i < trig.length; i++) {
// 		trig[i].disabled = true;
// 	}
// 	for (var i = 0; i < systems.length; i++) {
// 		systems[i].disabled = true;
// 	}
// }