
var body = document.body.childNodes; 

Node.COMMENT_NODE =8;
var result = [];
var i=0;

for(var val in body){
	if(i<body.length){
		 if (body[val].childNodes.length!=0) {
		 	var children = body[val].childNodes;
		 	rec(children);
		}else{
			if (body[val].nodeType ==Node.COMMENT_NODE) {
				result.push(body[val]);
			}
		}
		i++;
	}
}



function rec(obj){
	for(var p in obj){
		if (p< obj.length) {
			if (obj[p].childNodes.length==0) {
				if (obj[p].nodeType ==Node.COMMENT_NODE) {
				result.push(obj[p]);
				}
			}else{
			var ch = obj[p].childNodes;
			return rec(ch);
			}
		}
	}
return true;
}



console.log(result);



