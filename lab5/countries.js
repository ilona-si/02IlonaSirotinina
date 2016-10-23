
var flag = true;
function craeteObj(i,t,c,p) {
	var countries = {
	 img: i,
	 title: t,
	 code: c,
	 population:p
	}
	return countries;
}

var images = ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/203px-Flag_of_Belarus.svg.png',
			  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/270px-Flag_of_Russia.svg.png',
			  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/270px-Flag_of_Ukraine.svg.png'];
var titles = ['Belarus','Russia','Ukraine'];
var codes = ['+375','+7','+380'];
var pop = ["9 494 200","146 544 710","42 488 512"];

var o;
table = document.getElementById('table');


for (var i = 0; i < titles.length; i++) {
	o = craeteObj(images[i],titles[i],codes[i],pop[i]);
	printObj(o);
}




function printObj(obj){
	var subtr = document.createElement('tr');	
	if (flag) {
		var tr = document.createElement('tr');
		for(var v in obj){
			var  th = document.createElement('th');
			var title = document.createTextNode(v);
			th.appendChild(title);
			tr.appendChild(th);
		}
		table.appendChild(tr);
		flag = false;	
	}
	for(var v in obj){
		var img = document.createElement('img');
		var value = document.createTextNode(obj[v]);
		var td = document.createElement('td');
		if (v=='img') {
			img.src=obj[v];
			td.appendChild(img);
		}else{
			td.appendChild(value);
		}
		subtr.appendChild(td);
	}
	table.appendChild(subtr);
}