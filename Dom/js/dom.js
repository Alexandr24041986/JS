(function() {
  'use strict';

  // var div = document.getElementById('div'); // поиск элемента по id
  // console.log("div", div);
  
  // // div.someValue = true;

  // var divs = document.getElementsByTagName("div"); //поиск по тегу, результат в виде массива
  // console.log(divs);

  // var divByClassName = document.getElementsByClassName("div-class"); //поиск по имени класса 
  // console.log(divByClassName);
  
  // // Поиск по селектору CSS
  // var querySelector = document.querySelector("ul"); // имя класса с точкой вернет один элемент

  // var querySelectorAll = document.querySelectorAll("li a"); // имя класса с точкой, вернет все элементы

  // // Поиск дочерних элементов
  // var divChildren = document.getElementById('div').children
  // console.log(divChildren);

  // // div.remove(); //удаление элемента
  
  // div.hasAttribute("id"); //проверка наличия атрибута
  // console.log(div.hasAttribute("id"));

  // div.setAttribute("id", "div id2") // изменение атрибута

  // div.getAttribute("id");   //получает атрибут
  // div.removeAttribute("id"); //удаляет атрибут

  // div.style.backgroundColor = "red"; // изменяет стили для динамического изменения

  // // div.classlist.add("css_class_Name") // добавление класса, если он уже есть - ничего не произойдет
  // // div.classlist.remove("css_class_Name") // удаление класса
  // // div.classlist.toggle("css_class_Name") // добавит новый класс если класса нет, удалит сущществующий, класс уже одолжен быть описан в css!!!

  // div.innerHTML = "<p>TEXT</p>"; // можно вставить текст в обхект

  // //созднание элемента

  // var pElem = document.createElement("img");
  // pElem.setAttribute("src","alt");
  
  // // div.appandChild(pElem);

  //родитель для формы
  var formContainer = 
  document.getElementById('form');



  //создали форму
  var form = document.createElement('form');
  form.setAttribute("id","form_id");
  form.setAttribute("action","#");
  form.setAttribute("method","post");

  //input
  var input1 = document.createElement('input');
  input1.setAttribute("type","text");
  input1.setAttribute("required",true);//не оставлять пустым, надо писать либо true или false
  // input1.setAttribute("id","input_id");


  var input2 = document.createElement('input');
  input1.setAttribute("type","text");



  var check = document.createElement('input');
  check.checked = true;
  check.setAttribute("type","checkbox");

  var btn = document.createElement('button');
  btn.setAttribute("value", "btn");

  //вкладываем друг в друга

  form.appendChild(input1);
  form.appendChild(input2);
  form.appendChild(check);
  form.appendChild(btn);


  //добавление формы в html
  formContainer.appendChild(form);

  // var input_val = 
  // document.getElementById('input_id').value;

 // document.getElementById('input_id').checked;

  // console.log("input_val",input_val);

  var click = document.getElementById("click");

  

  //click
  //contextmenu
  //dblclick
  //mousedown нажатая кнопка над элементом
  //mouseup
  //mouseover
  //mouseout
  //mousemove

  click.addEventListener("click",showClickElem);//click не связано с id,просто название события,функция пишется бз вызова

  function showClickElem(event) {  
    // document.getElementById('input_id'.value);
    console.log("click",document.getElementById('input_id').value);
  }

// click.removeEventListener("click",showClickElem);// для удаления обработчика,имя функции должно быто тоже



// click.addEventListener("dbclick",dblClickInfo);
//   function dbClickInfo(event) {
//     // event.preventDefault();// отменяет событие по умолчанию
//     console.log("dbclick",this);
  

      // document.body.addEventListener("mousemove",showCoord);
      document.getElementById('mousemove');
      mousemove.addEventListener('mousemove',showCoord);
      function showCoord(event) {
      console.log("mouse coords:",event.clientX,event.clientY);
    }



}());