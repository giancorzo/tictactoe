window.addEventListener('load',function() {

  var newButton = document.getElementById('newBoard');
  var buttons = document.getElementsByClassName('botones');

  var app = new Tictactoe();

  newButton.addEventListener('click',function(event) {
    event.preventDefault();
    app.newBoard();
    buttons.value="+";
  });

  buttons.forEach(function(button) {
    button.addEventListener('click',function(event) {
      event.preventDefault();
      alert(this.id);
    });
  });

});
