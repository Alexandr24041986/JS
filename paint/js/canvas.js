(function() {
	'use strict';
	var erase = document.getElementById("paint_eraser");
	var handlers = {
		startDraw: function() {
			console.log("начало рисования");
			this.isDrawing = true;
		},
		endDraw: function() {
			console.log("рисование окончено");
			this.isDrawing = false;
		},
		drawing: function(event) {
			if (this.isDrawing) {
				console.log("рисование в процессе");


				var context = canvas.getContext('2d');
				context.beginPath();
				// context.fillStyle
				context.strokeStyle = document.getElementById('paint_brush_color').value;
				context.arc(event.offsetX, event.offsetY, document.getElementById('paint_brush_size').value,
					0,Math.PI*2,false);
				context.stroke();
				// context.fill();






			} else {
				return;
			};
			
		},
		erase: function () {
			document.getElementById("paint_brush_color").value = '#ffffff';
			console.log("началось стирание");
		},
	};
	var canvas = document.getElementById("canvas");
		canvas.addEventListener('mousedown', handlers.startDraw);
		canvas.addEventListener('mouseup', handlers.endDraw);
		canvas.addEventListener('mouseout', handlers.endDraw);
		canvas.addEventListener('mousemove', handlers.drawing);
		erase.addEventListener('click',handlers.erase);
}());



// elem.getBoundingClientRect();
// {
// 	'top':
// 	'bottom':
// } получить координаты элемента,над которым клик


//offsetX 

//  Свойство MouseEvent.offsetX, доступное только для чтения, 
// показывает отступ курсора мыши по оси X от края целевого DOM узла.

//  ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ
// Значение с плавающей запятой - double. Ранние версии спецификации определяли 
// возвращаемое значение как целое число. 

//pageX

// MouseEvent.pageX - это свойство MouseEvent доступное только для чтения. 
// Данное свойство возвращает значение равное горизонтальной координате, 
// относительно всего документа. Это свойство учитывает любую горизонтальную прокрутку 
// страницы. Первоначально это свойство было определено как длинное целое число. 
// Модуль просмотра CSSOM переопределил его как double float.

//clientX

// MouseEvent.clientX свойство доступное только для чтения. 
// Это свойство является горизонтальной координатой в пределах клиентской области приложения,
//  на которой произошло событие (в отличие от координат внутри страницы). 
//  Для примера, нажатие в верхнем левом углу клиентской области будет всегда приводить 
//  к событию со значением свойства clientX равным 0, независимо от того, 
//  прокручена страницы по горизонтали или нет.

//ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ

//Числовое значение горизонтальной координаты