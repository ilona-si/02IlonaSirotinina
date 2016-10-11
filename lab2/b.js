//2)Написать функцию, которая принимает в себя строку и массив ключевых слов.
//функция должна каждое ключевое слово в строке выделить тегом <b></b>

var str = prompt("Введите строку!");
var n = prompt("Введите количество ключевых слов")/1;
var arr = new Array(n);

getArray(arr);


document.write("key: <br>"+arr+"<br>");
document.write("str before change: <br>"+str+"<br><br>");

str = find(str, arr);

function getArray(arr){
	for (var i = 0; i < arr.length; i++){
		k=i+1;
		var key = prompt("Введите ключевое слово №"+k);
		arr[i] = key;
		//arr[i].push("k"); почему не работает(
	}
}
function find(str, arr){
	for (var i = 0; i < arr.length; i++) {
		var temp=arr[i];
		var reg = new RegExp(temp,"g");
		var str = str.replace(reg, "<b>"+arr[i]+"</b>");
		//document.write(str+"<br>");
	}
	return str;

}
document.write("result: <br>"+"<br>"+str+"<br>");








