function Tictactoe() {

  this.board;
  this.turno = 0;
  this.player = ["x","o"];

  this.newBoard = function() {
    this.turno = 0;
    this.board = [["+","+","+"],["+","+","+"],["+","+","+"]];
  }

  this.play = function(posicion) {
    var fila = Math.floor(posicion / 3);
    var columna = posicion % 3;

    this.board[fila][columna] = this.player[this.turno];
    this.turno = this.turno == 0 ? 1 : 0;
  }

  this.checkWinner = function() {
    return  (this.board[0][0] == this.board[0][1] && this.board[0][0] == this.board[0][2]) || //first row
      		  (this.board[1][0] == this.board[1][1] && this.board[1][0] == this.board[1][2]) || //second row
      		  (this.board[2][0] == this.board[2][1] && this.board[2][0] == this.board[1][2]) || //third row
      		  (this.board[0][0] == this.board[1][0] && this.board[0][0] == this.board[2][0]) || //first column
      		  (this.board[0][1] == this.board[1][1] && this.board[0][1] == this.board[2][1]) || //second column
      		  (this.board[0][2] == this.board[1][2] && this.board[0][2] == this.board[2][2]) || //third column
      		  (this.board[0][0] == this.board[1][1] && this.board[0][0] == this.board[2][2]) || //diagonal 1
      		  (this.board[0][2] == this.board[1][1] && this.board[0][2] == this.board[2][0]);   //diagonal 2
  }
}

if(typeof exports !== 'undefined') {
  exports.Tictactoe = Tictactoe;
}
