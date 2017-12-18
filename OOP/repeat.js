(function() {
'use strict';

	function Farm(name, humanName) {
		this.name = name; 
		this.human = new Human(humanName);
	};

	function Human(name) {
		this.name = name;
		
	};

	function AnimalHotel() {
		this.animals = [];
		this.maxCount = 3;
		this.addAnimal = function(animal) {
			if (this.animals.length < this.maxCount) {
				this.animals.push(animal);
				console.log(this.animals);
			} else {
				console.log("Нет свободных мест");
			}
		};
	};

	function Animal(name) {
		this.name = null;
	};

	function HomeAnimal(name) {
		Animal.call(this); 
		this.name = name;
	};

	var farm = new Farm('Ферма', "Боб");


	var cat = new HomeAnimal('ВАСЯ');
	var donkey = new HomeAnimal('Иа');
	var animalHotel = new AnimalHotel();
	animalHotel.addAnimal(cat);
	animalHotel.addAnimal(donkey);
	console.log(animalHotel);

}());
