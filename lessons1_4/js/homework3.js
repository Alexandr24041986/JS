(function () {
	"use strict";

	let a=45
	let b=0
	function calc(a, b, operator) {
		if (checkType(a, b) && operator === '+') {
			return a + b;
		} else if (checkType(a, b) && operator === '-') {
			return a - b;
		} else if (checkType(a, b) && operator === '*') {
			return a * b;
		} else if (checkType(a, b) && operator === '/') {
			if (b != 0) {
				return a / b;
			} else {
				return 'здесь можно,но вообще нельзя)))';
			}		 
		}
	}

	let res = calc(a,b,'/'); 
	console.log(res);

	function checkType(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return true;
		} else {
			return false;
		}
	}

//рекурсия 
 	var n = 4287;
    var z = 0;
	    function recurs(n) {
	        if (n%10) {
	            z += n%10;
	            n -=n%10;
	            return recurs(n/10);
	            } else {
	                return n+z;
	            }
	        }
	    
	    console.log(recurs(n));
    

}())
	
