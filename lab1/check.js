//2)Написать функцию, которая проверит правильность расстановки круглых скобок в строке.

var str1 = prompt("Введите строку!");
var str = str1;

check(str);


function remove(str,open,close){
	var trash = str.slice(open,close+1);
	var innerOpen = trash.indexOf("(",open+1);
	if(innerOpen>=0){
		var trash = str.slice(innerOpen,close+1);
	}
	str = str.replace(trash,"");
	if (str) {
		check(str);
	}else{
		alert("	Скобки расставлены корректо!");
		exit();
	}
	
}

function check(str){
	var open = str.indexOf("(");
	var close = str.indexOf(")");
	if (close<0 && open <0) {
		alert("В строке нет скобочек или все корректно!");
		exit();
	}
	if (close<0) {
		alert("В строке не хватает закрывающей скобки!");
		exit();
	}
	if (open<0) {
		alert("В строке не хватает открывающей скобки!");
		exit();
	}
	if(open>close){
		alert("Закрывающая  скобка стоит перед открывающей!");
		exit();
	}else{
		remove(str,open,close);
	}
}



