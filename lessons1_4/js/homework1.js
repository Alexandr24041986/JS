//задача первая//
'use strict'
let varA = 4;
let varB = 53;
let varC = 5;

let varAmount = 2*(varA *varB + varB * varC + varA*varC);
let varScuareside = varA * varB;
let varCondition = varA < varB ? 'высота меньше ширины' : 'высота больше ширины'

console.log(varAmount);
console.log(varScuareside);
console.log(varCondition);


//задача вторая//
console.log("задача вторая");
let varSquare = 1000;
let varWbeds = 15;
let varDbeds = 25;

let varSbeds = varWbeds * varDbeds;
let varRemainder = varSquare % varSbeds;
console.log(varRemainder);

//задача третья//

let varBoval = 1500;
let varMoval = 600;
let varRingoval = varBoval - varMoval;

console.log(varRingoval);

//задача четвертая//

let varZ = 36;
let varY = 5;

varZ % varY <=4 ? console.log(varA + varY):console.log(varZ - varY);


// Д З №2

//задача первая
console.log("задача 1 на субботу");
console.log(" ");
let Plate = 10;
let Bottle = 7;
while(Plate > 0 && Bottle > 0){
	Plate--;
	Bottle = Bottle - .5;
	console.log("Моющего средства осталось",Bottle);
	console.log("Тарелок осталсь",Plate);
}



// задача вторая
// Создать таблицу соответствия между весом в фунтах и весом в килограммах для дначений от 1 до 10
console.log("задача 2 на субботу");
console.log(" ");
for (let ft = 1; ft <= 10; ft++) {
	let kg = ft * 0.454;
	console.log(ft + " фунтов равно " + kg + " килограмм");
}



//задача с "пузырьком"
console.log("задача с пузырьком")
console.log(" ");
let arrBubble = [34, 56, 76, 45, 89, 90, 24],
 i, j, k,n = arrBubble.length;
console.log("Исходный массив: " + arrBubble);
console.log("Количество элементов в массиве: ", + n);

for (j = 0; j < n; j++) {
    for (i = 0; i < (n - 1); i++) {
        if (arrBubble[i] > arrBubble[i + 1]) {
            k = arrBubble[i];
            arrBubble[i] = arrBubble[i + 1];
            arrBubble[i + 1] = k;
        }
    }
}
console.log("Отсортированный массив: " + arrBubble);


// Задание 3
// Посмотреть, как работают методы для работы с массивами: join, slice, indexOf/lastIndexOf, concat.
// Разобрать по 1му примену на каждый из них. В субботу обсудим
console.log("задача 3 на субботу");
console.log(" ");
var arrA = [24, 34, 4, 5, 6, 87];
console.log("Исходный массив: " + arrA);

// метод join собирает элементы в строку 

var str = arrA.join('-');
console.log(str);

// метод slice
var arrB = arrA.slice(0, 4);
console.log(arrB);


// метод arr.concat

var arrConcat = [1, 2, 3];
var arrConcat2 = arrConcat.concat('7', '8');
console.log(arrConcat);
console.log(arrConcat2);