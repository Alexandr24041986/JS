(function() {
	'use strict';

	var keydown = document.getElementById('input');
	var textarea = document.getElementById('textarea');

	keydown.addEventListener('keydown', write);

	function write(event) {
		console.log(event.key);
		textarea.value += event.key;
	}




	document.addEventListener('DOMContentLoaded', ready);

		function ready(event) {
		console.log("DOM готов");
	};

	document.addEventListener('beforeunload', onbeforeunload);
	function onbeforeunload(event) {
	    console.log('beforeunload');
	 };


	var div = document.getElementById("onload");

	div.onload = onload;
		function onload() {
			console.log('onload');
		};

}());