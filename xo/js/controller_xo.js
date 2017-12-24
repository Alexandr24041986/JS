(function(){
'use strict';

  function create(){
    for (var i=0; i<9; i++) {
      document.getElementById('container2').innerHTML+='<div class="cell"></div>';
    }
  }

  var hod = 0;

  document.getElementById('container2').onclick = function(event){
    console.log(event);
    if (event.target.className === 'cell'){
      if (hod%2==0) {
        event.target.innerHTML = 'x';
      }
      else {
        event.target.innerHTML = '0';
      }
      hod++;
      checkWinner();
    }
  }

  function checkWinner(){
    var celll = document.getElementsByClassName('cell');
   }




}());