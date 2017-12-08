(function () {
	"use strict";


	//задача 1
		var city1 = {
			name: 'Spb',
			population: '6000000',
			mayor: 'Poltava',
			transition: function(a) {
				 this.population = this.population + a;
				 city2.population = city2.population - a;
			},
		};

		var city2 = {};
		city2.name = 'London';
		city2.population = '8788';
		city2.mayor = 'Han';
			
		console.log(city1, city2);

		city1.transition(6000);

		console.log(city1, city2);


		var IsMayor = function(city) {
			return city.mayor;
		}

		console.log(IsMayor(city1));

		var president = {
			changeCountryMayor: function(cityName, newMayor) {
				return cityName.mayor = newMayor;
			},
		}

		president.changeCountryMayor(city1, 'Matvienko))');

		console.log(city1, city2);

		//2 ряд: написать функцию validateData(data, flag)
	





	//задача со строкой
		console.log("Задача со строчкой")
		var str = "как же,как же,так произошло?";
		var substr = str.substring(4, 10);

		function searchString (str, substr) {
			var position = 0;
			var n = 0;
			while (true) {
				var Position2 = str.indexOf(substr, position);
				if (Position2 == -1) break;
			  	position = Position2 + 1;
			  	n++;
			}
			return n;
		}

		console.log("Подстрока", substr,searchString (str, substr), "раз встречается");
}());

		