var DOM = {
	remove:	function (el){
		el.parentNode.removeChild(el);
		//удаляет элемент el 
	}, 
	 append: function (el, target) {
	 	target.parentNode.insertBefore(el, target.nextSibling)
	 	//- добавляет элемент el в конец эл-та target 
	 },
	 replace: function (el, target) {
	 	target.parentNode.insertBefore(el, target);
	 	this.remove(target);
	// 	- заменяет элемент el на элемент target
	 },
	 prepend: function (el, target) {
	 	target.insertBefore(el, target.firstChild);
	// 	- вставляет элемент el в начало элемента target
	} ,
	 copy:function(el, target) {
	 	var el2 = el.cloneNode(true);
	 	this.append(el2,target);
	// 	- копирует элемент el в конец target
	} ,
	 copyPre: function (el, target) {
	// 	- копирует элемент el в начало target 
	var el2 = el.cloneNode(true);
	this.prepend(el2,target);
	 }
}
var body = document.body;
var footer = document.getElementById('footer');
var ul = document.getElementById('ul');
var p = document.getElementById('p');
var h1 = document.createElement('h1');
var h2 = document.createElement('h2');
var h3 = document.createElement('h3');

DOM.remove(footer);
DOM.append(h1,p);
DOM.replace(h2,h1);
DOM.prepend(h3,ul);
DOM.copy(ul,body);
DOM.copyPre(ul,body);

