// //не работает, спросить, почему
// //var body = document.getElementByTagName("body");
// //console.log(body.childNodes.length);  
//Как впихнуть то, что получилось в объект



var body = document.body.children; 
var subEl = [];
var result = [];
var i=0;


for(var val in body){
	if(i<body.length-1){
		 if (body[val].children.length!=0) {
		 	var children = body[val].children;
		 	var rez = getElementsList(children);
			 result.push(rez);
		}else{
			result.push(body[val]);
		}
		i++;
	}
}

function getElementsList(obj){
	var array = [];
	array.push(rec(obj));
	return array;
}


function rec(obj){
	var arr = [];
	for(var p in obj){
		if (p< obj.length) {
			if (obj[p].children.length==0) {
	 			arr.push(obj[p]);
			}else{
			var ch = obj[p].children;
			return rec(ch);
			}
		}
	}
return arr;
}

console.log(result);

