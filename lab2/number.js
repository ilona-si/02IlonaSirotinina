//написать регулярное выражение, которое проверит правильность введения номера телефона 
// 33
// 44 
// 25
//+375 (29) 850-76-55
//[0-9]{7} - 7 любых чисел в диапазоне  0 - 9
/*
^   - начало строки
\+  - плюс как символ
\s  - символ пробела
\(  - символ скобочки
|   -  или
\d = [0-9]
{2} - количество символов
$ - конец строки
*/

var phone = prompt("Please, enter your phone in format +375 (xx) xxx-xx-xx");
var t=/^\+375\s\(25|29|44|33{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone);

t=check(t);
alert("all right!thank you!");
function check(t){
	if(t){
		return t;
	}else{
		 phone = prompt("Wrong format,try again! Enter your phone in format +375 (xx) xxx-xx-xx");
		 var t=/^\+375\s\(25|29|44|33{2}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone);
		 return check(t);
		 
	}
}
