// 1)Написать рекурсивную функцию для вычисления суммы цифр числа. 

var n = prompt("Пожалуйста, ведите целое число")/1;

check(n);

function check(n){
	if(isNaN(n)){
		var n =prompt("Ошибка! Введено не число! Введите число!")*1;
		check(n);
	}else{
		summa(n,0);
	}
}

function summa(n,sum){
	var m = n%10;
	n=(n-m)/10;
	sum = sum + m;
	if (m==0 && n==0) {
		alert(" sum = "+ sum);
	}else{
		summa(n,sum);
	}
}