function Tictactoe() {

  this.board;
  this.turno = 0;
  this.player = ["x","o"];

  /*
    Obtiene el jugador actual (x / o)
  */
  this.getCurrentPlayer = function() {
    return this.player[this.turno];
  }

  /*
    Permite oscilar el turno entre 0 y 1
  */
  this.toggleTurn = function() {
    this.turno = this.turno == 0 ? 1 : 0;
  }

  /*
    Inicializa el board a cero
  */
  this.newBoard = function() {
    this.turno = 0;
    this.board = [["+","+","+"],["+","+","+"],["+","+","+"]];
  }

  /*
    Permite realizar una jugada en el tablero...como parametro de entrada
    recibe un valor entre 0 y 8 el cual convierte a una coordenada (0,0)
    Una vez que termino cambia de turno
  */
  this.play = function(posicion) {

    var fila = Math.floor(posicion / 3);
    var columna = posicion % 3;

    this.board[fila][columna] = this.getCurrentPlayer();
    this.toggleTurn();
  }

  /*
    Chequea quien es el ganador del juego
  */
  this.checkWinner = function() {
    return this.check(this.player[0]) ? "Ganaron las X" :
           this.check(this.player[1]) ? "Ganaron las O" :
           this.checkFull() ? "Es un empate" : null;
  }

  /*
    Es utilizada por check Winner para determinar si ganaron las X o las O
  */
  this.check = function(player) {
    return  (this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2] && (this.board[0][0] == player)) || //first row
      		  (this.board[1][0] == this.board[1][1] && this.board[1][0] == this.board[1][2] && (this.board[1][0] == player)) || //second row
      		  (this.board[2][0] == this.board[2][1] && this.board[2][0] == this.board[1][2] && (this.board[2][0] == player)) || //third row
      		  (this.board[0][0] == this.board[1][0] && this.board[0][0] == this.board[2][0] && (this.board[0][0] == player)) || //first column
      		  (this.board[0][1] == this.board[1][1] && this.board[0][1] == this.board[2][1] && (this.board[0][1] == player)) || //second column
      		  (this.board[0][2] == this.board[1][2] && this.board[0][2] == this.board[2][2] && (this.board[0][2] == player)) || //third column
      		  (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2] && (this.board[0][0] == player)) || //diagonal 1
      		  (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0] && (this.board[0][2] == player));   //diagonal 2
  }

  /*
    Es utilizada para validar que un tablero está lleno
  */
  this.checkFull = function() {
    return  ((this.board[0][0] == "x") || (this.board[0][0] == "o")) &&
  			    ((this.board[1][0] == "x") || (this.board[1][0] == "o")) &&
  			    ((this.board[2][0] == "x") || (this.board[2][0] == "o")) &&
  			    ((this.board[0][1] == "x") || (this.board[0][1] == "o")) &&
  			    ((this.board[1][1] == "x") || (this.board[1][1] == "o")) &&
  			    ((this.board[2][1] == "x") || (this.board[2][1] == "o")) &&
  			    ((this.board[0][2] == "x") || (this.board[0][2] == "o")) &&
  			    ((this.board[1][2] == "x") || (this.board[1][2] == "o")) &&
  			    ((this.board[2][2] == "x") || (this.board[2][2] == "o"));
  }
}

/*
  Exporta esta clase para que test.js puede requerirlo
*/
if(typeof exports !== 'undefined') {
  exports.Tictactoe = Tictactoe;
}
