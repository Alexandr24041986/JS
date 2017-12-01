'use strict';
console.log("arrays");

var arrName = [];//создание массива

var pictures = ['forest','sky','ocean'];
console.log('pictures',pictures);


var firstElem = pictures [0];
var secondElem = pictures [1];
var thirdElem = pictures [2];

console.log(firstElem , secondElem ,thirdElem );

pictures[0] = "new picture";//заменили значение элемента
pictures[3] = "new elem";// добавили элемент в массив

console.log('pictures',pictures);


var pictureLenght = pictures.lenght;
console.log("pictureLenght",pictureLenght);

pictures.pop();//удаляет последний тип массива
pictures.push("new elem");//добавляет элемент или несколько элементов массива с конца
console.log('pictures',pictures);

//только с первыми элементами массива, медленне чем предыдущий метод
pictures.shift();//удаляет элемент
pictures.unshift('new first elem');//прибавляет элемент

var str = "vall , val2 , val3";

var arrFromStr = str.split(', ');//преобразование строки в массив в скобках (запятая и потом пробел)
console.log('arrFromStr',arrFromStr);

pictures = ['forest','sky','ocean'];
//pictures.splice(index[,delCount, elem1....elemN]);
console.log (pictures.splice(0, 1),pictures);//вырезает данные с массива начиная с указанного элемента и делает свой

var numArr = [1, 2, 3];
numArr.reverse();//изменяет исходный массив

console.log(numArr);
console.log(window);


var matrix = [
[1 ,2 ,3],
[4, 5, 6],
[7, 8, 9]
];

var matrix2 = [
[1 ,2 ,3],
[4, 5, 6],
[7, 8, 9]
];

console.log(matrix + matrix2);


// //логические операторы
// || - //оператор или
// && - //оператор и 
// ! - //оператор нет

var x = 8;
var y = 2;

// (x < y) || (x === y)//true если выполняется условие
// (x < y) || (x !== y)//true если выполняются все условия


//конструкция ветвления

// if (x < y) {
// 	//code; только если выполнено условие ,если нет интерпритатор пойдет дальше и не выполнит код
// } else {
// 	//code2; если первое условие верно то выполнится первое условие если нет в противном случае 
// }


// // оператор выбора 

// // switch (x) {// если x равен значению val, то выполнится один код
// // 		case vall:
// // 		//code;
// // 		case val2:
// // 		//code;
// // 		case3,
// // 		case4:
// // 		//code;
// // 		[default:
// // 		//code;]
// }

var str1 = "string";
switch(str1) {
	case "string":
		console.log("string");
		break;
	case "not str":
		console.log("not string");
		break;
	default:
		console.log("default");

}

var yearTime;

var currentDate = new Date();
var currentMonth = currentDate.getMonth();

if((currentMonth <= 1) ||
	(currentMonth === 11)) {
	yearsTime = "winter";
}	else if ((currentMonth <= 4) && (currentMonth >=2))
{
	yearsTime = "spring";
}	else if ((currentMonth <= 7) && (currentMonth >=5))
{
	yearsTime = "summer";
}	else {
	yearTime = "autumn";
}

console.log(yearTime);

// switch (currentMonth){
// 	case 0, 1, 11:
// 	yearTime = "winter";
// 	break;
// 	case 2,3,4
	

// }


//циклические операторы оператор с предусловием
//while (1) цикл бесконечен

// while (cond) {
// 	//code;
// 	//while cond == true
// }

// var pictures = 5 ;


// while (pictures) {
// 	pictures --;
// 		console.log("pictures", pictures);// одно повторение цикла - итерация
// }

// цикл с постусловием

// do {
	//code;
	//while cond == true
//} while(cond);

// do {
// 	console.log("iter");
// } while(0);


var pictures = 10;
while (pictures) {
	pictures --;
		console.log("pictures", pictures);
} while(pictures);


var arr = [1, 3, 6, 7, 90];
var i = 0;
while (i < arr.lenght) {
	console.log(arr[i]);
	i++;
}


// for (start; cond; step ) {// обязательны ;
// 	//code;
// 	//while cond == true
// }


var arr = [1, 3, 6, 7,90];
for (var j = 0; i < arr.Lenght; j++) {
	arr[j] +=2;

}

console.log(arr);



задача на дом

дано

var tar = 23;
var fairy = 34;
0.5 fairy - 1 tar
while () {
	console.log(fairy)
}
console.log(fairy || tar);//когда средство закончится цикл должен остановиться