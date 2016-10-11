// 1)Написать  функцию, которая сгенерирует массив из N случайных чисел, со средним значением s и отклонением от него не более,
//чем на p%. Отсортировать такой массив и вычислить в нем среднее значение. 

var n = prompt("Пожалуйста, ведите количество элементов в массиве")/1;
var s = prompt("Пожалуйста, ведите среднее значение элементов в массиве")/1;
var p = prompt("Пожалуйста, введите отклонение  0-100 %")/100;

var min = (1-p)*s;
var max = (1+p)*s;

arr = setArr(n,min,max);

function setArr(n,min,max){
	var arr = new Array();
	for (var i = 0; i < n; i++){
		arr.push(Math.random() * (max - min) + min);
	}
	return arr;
}
document.write("<br> <br> Массив:  <br>")
for (var i = 0; i < n; i++){
		document.write(arr[i]+"<br>");
		
}
document.write("<br> <br> Отсортированный массив:  <br>");
arr.sort();
for (var i = 0; i < n; i++){
		document.write(arr[i]+"<br>");	
}

var middle = getMiddle(arr);
document.write("<br> <br> Среднее значение элементов в массиве = "+middle+ "  <br>");
function getMiddle(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
	return sum/arr.length;
}