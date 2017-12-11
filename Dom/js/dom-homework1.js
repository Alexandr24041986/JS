(function () {
   'use strict';
//  Задание на субботу (9.12.2017):
// Создать объект slider, в нем будут два метода:
// 1. init : получение элемента (по id), в который и будут вставляться слайды
// 2. add: добавление картинок в слайдер ( метод на вход принимает путь до картинки и alt, создает img, добавляет необходимые атрибуты и классы, и добавляет созданный элемент в элемент, который получили в методе init )
// Внутри объекта пользуйтесь this
   var element = "slide";
   var slider = {
   	init: function (id) {
   		var element = document.getElementById(id);
   		return element;
   	},
   	add:function(src,alt){
   		var elem2 = document.createElement("img");
   		elem2.setAttribute("src",src);
   		elem2.setAttribute("alt",alt);
   		elem2.classList.add('image');
   		this.init(element).appendChild(elem2);
   	},
   };
    
	slider.add("images/cat.jpg", "cat");

}());