var names =['Ilona','Denis','Kate','Nastya','Sergei','Vlad'];
var cities = ['Минска', 'Гомеля', 'Добруша','Москвы','Киева']; 
var goods = [' Стул АС18', 'Мультиварка Lenovo xPro', 'Смартфон Nokia 3320','Пылесос Samsung', 'Утюг Bosh'];

var list = document.getElementById('div');
setInterval(createComment, 3000);

function createComment() {
	var div = document.createElement('div');
	var name = names[Math.floor(Math.random()*names.length)];
	var city = cities[Math.floor(Math.random()*cities.length)];
	var item = goods[Math.floor(Math.random()*goods.length)];
	var i = Math.floor(Math.random()*11);
	var comment = document.createTextNode(name +'  из  '+ city+ '  купил(а)  '+ item+ ' ' +i+'шт товара');
	div.appendChild(comment);
	list.appendChild(div);
}