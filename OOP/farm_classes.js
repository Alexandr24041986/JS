(function () {
	'use strict';
	class Farm{
		constructor(name,humanName){
			this.name = name;
			this.humanName = new Human(humanName);
		};
	};

	class Human{
		constructor(name){
			this.name = name
		};
	};

	class AnimalHotel{
		constructor(name){
			this.animals = [];
			this.maxcount = 3;
			this.name = name;
	};
		addAnimal(animal){
			if(this.animals.length < this.maxCount) {
				this.animals.push(animal);
				console.log(this.animals);
			} else {
				console.log("Нет свободных мест");
			}
		};
	};

	class Animal{
		constructor(name){
			this.name = null;
		};
	};
		
			
	class HomeAnimal extends Animal{
		constructor(name, type) {
		super(name);
		this.type = type; 
		};
	};

	let farm = new Farm('Ферма', 'Боб');
	console.log(farm);

	let donkey = new Animal('ИА');
	let cat = new HomeAnimal('ВАСЯ', 'кошара');
	console.log(donkey, cat);

	let animalHotel = new AnimalHotel('халупа с животными');
	console.log(animalHotel);

	animalHotel.addAnimal(cat);
	animalHotel.addAnimal(donkey);
	console.log(animalHotel);
		


}());