// Д З №2

//задача первая
'use strict'
console.log("задача 1 на субботу");
console.log(" ");
let Plate = 10;
let Bottle = 7;
while(Plate && Bottle){
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
    console.log(ft + " фунтов = " + kg + " килограмм");

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


//задача с  треугольником

var xa = 6, ya = 8, xb = 7, yb = 3, xc = 9, yc = 6;

console.log("Координаты точки A - X=" + xa, "Y=" + ya);  
console.log("Координаты точки B - X=" + xb, "Y=" + yb);  
console.log("Координаты точки C - X=" + xc, "Y=" + yc);  

let ab = (xb - xa) * (xb - xa) + (yb - ya) * (yb - ya);
let ac = (xc - xa) * (xc - xa) + (yc - ya) * (yc - ya);
let bc = (xb - xc) * (xb - xc) + (yb - yc) * (yb - yc);

console.log("квадрат ab =", ab);
console.log("квадрат ac =", ac);
console.log("квадрат bc =", bc);  

if (ab === ac + bc || bc === ab + ac || ac === ab + bc) {
    console.log("треугольник имеет прямой угол");
} else {
    console.log("треугольник не является прямоугольным");
}