//Espera a que todo cargue
window.addEventListener('load',function() {

  //Obtiene los botones
  var newButton = document.getElementById('newBoard');
  var buttons = document.querySelectorAll('.botones');

  //Crea la clase tictactoe encargada de toda la lógica y crea un tablero nuevo
  var app = new Tictactoe();
  app.newBoard();

  //Agrega la funcionalidad de click a nuevo tablero
  newButton.addEventListener('click',function(event) {
    event.preventDefault();
    app.newBoard();
    for (var i = 0; i < buttons.length;i++) {
      buttons[i].innerHTML = "+";
    }
  });

  //Por cada botón del tablero agrega una funcion la que se encarga de transmitir la información
  //a la aplicación.
  for (var i = 0;i < buttons.length;i++) {
    buttons[i].addEventListener('click',function(event) {
      event.preventDefault();
      event.target.innerHTML = app.getCurrentPlayer();
      app.play(event.target.id);
      var result = app.checkWinner();
      if (result != null) {
        alert(result);
      }
    });
  }

});
