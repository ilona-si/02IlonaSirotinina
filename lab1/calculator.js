var a = prompt("Введите число а")/1;
var a=check(a)/1;
var b = prompt("Введите число b")/1;
//alert(typeof(check(b)));  //что за бред
var b=check(b)/1;
// alert(b);  //что за бред
var operation = prompt("Введите операцию(+, -, /, *) ");

calc(a,b,operation);




function check(n){
	if(isNaN(n)){
		var n = prompt("Ошибка! Введено не число! Введите число!")/1;
		check(n);
	}else{
		//alert("ret n = "+ n);
		//alert(typeof(n));
		return n;
	}
}

function calc(a,b,operation){

switch(operation){
	case "+":
		var rez = a+b;
		alert("a + b = " +a+"+"+b+"="+rez);
		break;
	case "-":
		var rez = a-b;
		alert("a - b = " +a+"-"+b+"="+rez);
		break;
	case "*":
		var rez = a*b;
		alert("a * b = " +a+"*"+b+"="+rez);
		break;
	case "/":
		if (b) {
			var rez = a/b;
		}else{
			var b = prompt("На ноль делить нельзя. Введите число b")/1;
			calc(a,b,operation);
		}
		alert("a / b = " +a+"/"+b+"="+rez);
		break;
	default:
		var operation = prompt("Неверная операция. Введите операцию(+, -, /, *) ");	
		calc(a,b,operation);
		break;
}

}