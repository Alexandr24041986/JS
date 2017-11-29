// однострочный комментарий
/* многострочный комментарий
*/

'use strict';
console.log("Lessson 1","info");//отладка
var varName; //объявление (создание) переменной
//буквы
// цыфры (не может быть первым символом)
//_
// $
varName = 45; // присвоение переменной значения
varName = "new val"; // переопределение значения переменной
console.log(window);

let var1, var2, var3;
let varName2 = "value";// объявление переменной в 6 версии


console.log(window, varName2);

//data types
//простые типы данных

let str = "Строковой тип 'строка в кавычках' данных";
str = "Строковый \n тип \"строка в кавычках\" данных";

//логический тип

let boo = true;
let boo2 = false;

// К false преобразуются
// 0
// ""
// null
// undefined

//console.log(0==false);
//console.log(" "==false);
//console.log(""==false);

// Числа
//isNaN(someVar);
//true -если значение является NaN или не может быть преобразовано в число
//false - если значение число или может быть в него преобразовано
console.log("56",isNaN(56));
console.log("'56'", isNaN('56'));
console.log();
console.log();
console.log();
console.log();


// null 
// undefined

let nullVar = null;//лежит ничего
let undefVar;//пустая ссылка


//typeof имя переменной
console.log("typeof str:", typeof str);
console.log("typeof someNum:", typeof number);
console.log("typeof nullVar:", typeof nullVar);

//операторы

// арифметические операторы
// + - * / % -деление по модулю

console.log("56" - 9);
console.log("gfhfkdsk" - 9);


console.log("56" + 9);//склеивание строк

console.log(4 ** 3);

console.log("0.1 + 0.2=", 0.1+0.2);//неточность вычисления
//console.log(99999999999999999);


// операторы присваивания

// = присваивание
// += | -+ | *= | /= | %= |
let a = 30;
// a = a + 10;
// a += 10  записи идентичны
console.log(10%3);// 1

//операторы сравнения

// == равенство
// != неравенство


// === идентичность
// !== неидентичность

console.log("==", 0 == false);// допускается приведение типов
console.log("===", 0 === false);// не допускается

// > больше
// < меньше
// >= больше или равно
// <= меньше или равно

console.log(3 > 6);

// инкримент и дикримент
// ++a - префиксный инкримент
// a++ - постфиксный инкримент

//--a - префиксный декримент
//a-- - префиксный декримент

// let x=1;
// let y=9;
// console.log(x++);
// console.log(y--);

// // тернарный оператор "?"

// условие ? значение1 : значение2
//  если условие верно (true), значение1,если не верно вернет (false) значение2


let x = 2;
let y = 9;

let result = x < y ? "x меньше y" : "x больше y";
console.log("result = ", result);

let now = new Date();
console.log("now = ",now);
let sec = now.getSeconds();
let month = now.getMonth();
console.log("month",month);// начинается с 0 и заканчивается 11


// в начале каждого часа:


// в течении 3 минут горит-зеленый затем 1 минуты-желтый
// затем в течении 1 минуты-красный

// узнать какой цвет горит в данный момент времени


//остаток от деления
//тернарный оператор

// 0 1 2 - горит-зеленый
// 3 - желтый
// 4-красный


let res = sec%5 >= 0 && sec%5 < 3 ? "green" : sec%5 === 3 ? "yellow" : "red";
 console.log(sec,res);



