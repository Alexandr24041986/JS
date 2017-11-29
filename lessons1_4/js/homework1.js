//задача первая//
'use strict'
var a = 4;
var b = 53;
var c = 5;

var amount = 2*(a*b + b*c + a*c);
var scuareSide = a*b;
var condition = a<b ? 'высота меньше ширины' : 'высота больше ширины'

console.log(amount);
console.log(scuareSide);
console.log(condition);


//задача вторая//

var square = 1000;
var wbeds = 15;
var dbeds = 25;

var sbeds = wbeds*dbeds;
var remainder = square - (wbeds*dbeds);

console.log(remainder);

//задача третья//

var boval = 1500;
var moval = 600;
var ringOval = boval - moval;

console.log(ringOval);

//задача четвертая//

var a = 36;
var b = 5;

a % b <=4 ? console.log(a + b):console.log(a - b);