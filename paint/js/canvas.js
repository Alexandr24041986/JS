(function() {
	'use strict';
	var handlers = {
		startDraw: function() {
			console.log("startDraw");
		},
		endDraw: function() {
			console.log("endDraw");
		},
		drawing: function() {
			console.log("drawing");
		},
		erase: function () {
			console.log("erase");
		},
	};
	var canvas = document.getElementById("canvas");
		canvas.addEventListener('mousedown', handlers.startDraw);
		canvas.addEventListener('mouseup', handlers.endDraw);
		canvas.addEventListener('mouseout', handlers.endDraw);
		canvas.addEventListener('mousemove', handlers.drawing);
}());