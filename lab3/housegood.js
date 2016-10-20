
var application = {
	 houseArray:new Array(),
	 peopleArray:new Array(),
	createHouse:function(FlatCount,MSquare,Material,Address,Year,FloorsCount){
		var house = {
			flatCount: FlatCount,
			floorsCount: FloorsCount,
			mSquare: MSquare, 
			address: Address,
			material: Material,
			year: Year,
			get peopleCount() {
				return this.people.length;
				},
				people:  new Array(),
			setPeople: function(man){
				this.people.push(man);
			}
		}
	return house;
	},
	createMan:function(Name,Age,Height,Weight,Sex,Occupation){
		var man = {
			name: Name,
			age: Age,
			height: Height,
			weight: Weight,
			sex: Sex,
			address: '', 
			occupation: Occupation,
			settling: function(man,house){
				man.setAddres(house);
				house.setPeople(man);
			}, 
			setAddres: function(house){
				this.address=house.address;
			}
		};
	  return man;
		},
		select:function(){
				var name = prompt("Введите имя:").trim().toLowerCase();
				var address = prompt("Введите address:").trim().toLowerCase();
				for (var i = 0; i < this.peopleArray.length; i++) {
					if (this.peopleArray[i]['name'].toLowerCase()==name) {
						var man=this.peopleArray[i];
					}
				}
				for (var i = 0; i < this.houseArray.length; i++) {
					if (this.houseArray[i]['address'].toLowerCase()==address) {
						var house=this.houseArray[i];
					}
				}
				if (typeof(house)!="object") {
					 alert("нет соответсвий для имени или адреса!");
					 return false;
				}
				if (typeof(man)!="object") {
					 alert("нет соответсвий для имени или адреса!");
					 return false;
				}
				this.postHouse(man,house);				
				return true;
		},
		postHouse:function(man,house){
				man.settling(man,house);
		},
		fillHouse: function(){
			var n = prompt("Количество домов")/1;
			for (var i = 0; i < n; i++) {
				var Address = prompt("Address: ").trim();
				var Year = prompt("Year: ");
				var FlatCount = prompt("FlatCount: ")/1;
				var FloorsCount = prompt("FloorsCount: ")/1;
				var MSquare = prompt("MSquare: ")/1;
				var Material = prompt("Material: ");
				this.houseArray.push(this.createHouse(FlatCount,MSquare,Material,Address,Year,FloorsCount));
			}
		},
		fillPeople:function(){
			var m = prompt("Количество людей")/1;
			for (var i = 0; i < m; i++) {
				var Name = prompt("Name: ").trim();
				var Age = prompt("Age: ");
				var Height= prompt("Height: ");
				var Weight= prompt("Weight: ");
				var Sex = prompt("Sex: ");
				var Occupation = prompt("Occupation");
				this.peopleArray.push(this.createMan(Name,Age,Height,Weight,Sex,Occupation));		
			}
		},
		printObj:function(obj,a=1){
			for(var v in obj){
				var list = document.getElementById('list');
				var div = document.createElement('div');
				var span = document.createElement('span');
				if(typeof(obj[v])!="object" && typeof(obj[v])!="function"  ){
					if (a) {
						var div1 = document.createElement('div');
						div1.className = 'house';
						var t = document.createTextNode("House"); 
						div1.appendChild(t); 
						list.appendChild(div1); 
						a=0;
					}
					var val = document.createTextNode(obj[v]);
					var nameO = document.createTextNode(v+':  ');
					span.appendChild(nameO);
					div.appendChild(span);
					div.appendChild(val);
					list.appendChild(div);
				}
				if (typeof(obj[v])=="object"){
					if (obj[v].length!=0) {
						var p = document.createElement('p');
						p.className = 'people';
						var t1 = document.createTextNode("People"); 
						p.appendChild(t1);  
						list.appendChild(p);
						for (var i = 0; i < obj[v].length; i++) {
							 this.printObj(obj[v][i],0);
						}
			 		}
				}

			}
		},
 		sortA:function(h){
			h.sort(function(a,b){
			return a.address.localeCompare(b.address);
			});
			console.log('sort by adress');
			console.log(this.houseArray);
		},
		sortC:function(h){

			h.sort(function(a,b){
			return a.peopleCount-b.peopleCount;
			});
			console.log('sort by people count');
			console.log(this.houseArray);
		},
		start:function(){
			console.log(this.houseArray);
			this.fillHouse();
			this.fillPeople();
			alert("Заселение! ");
			var opration = prompt("Количество операций заселения:")/1;
			var promise = new Promise(function(resolve, reject){
				for (var j = 0; j < opration; j++) {
				application.select();
			}
		});

			promise.then(this.sortC(this.houseArray));
			promise.then(this.sortA(this.houseArray));
			
			
			for (var i = 0; i < this.houseArray.length; i++) {
				this.printObj(this.houseArray[i]);
			}
			this.restart();
		},
		restart:function(){
			 this.houseArray = new Array();
			 this.peopleArray = new Array();
			setTimeout(function(){
			var yes = prompt('Запустить приложение еще раз? yes=1 or no=0')/1;
			if (yes) {
				document.getElementById('list').innerHTML = " ";
				application.start();

			}}, 5000);
			}
			
			
}


application.start();