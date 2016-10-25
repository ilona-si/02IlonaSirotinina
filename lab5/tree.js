

// var body = document.body.children; 
// var subEl = [];
// var result = [];
// var i=0;


// for(var val in body){
// 	if(i<body.length-1){
// 		 if (body[val].children.length!=0) {
// 		 	var children = body[val].children;
// 		 	var rez = getElementsList(children);
// 			 result.push(rez);
// 		}else{
// 			result.push(body[val]);
// 		}
// 		i++;
// 	}
// }

// function getElementsList(obj){
// 	var array = [];
// 	array.push(rec(obj));
// 	return array;
// }


// function rec(obj){
// 	var arr = [];
// 	for(var p in obj){
// 		if (p< obj.length) {
// 			if (obj[p].children.length==0) {
// 	 			arr.push(obj[p]);
// 			}else{
// 			var ch = obj[p].children;
// 			return rec(ch);
// 			}
// 		}
// 	}
// return arr;
// }

// console.log(result);

function createObj(elem){
	var obj = {
		element: elem,
		children: new Array()
	};

	if (elem.childNodes.length > 0)
		elem.childNodes.forEach(function(o) {
			obj.children.push(createObj(o));
			});

	return obj;
}

console.log(createObj(document.body));