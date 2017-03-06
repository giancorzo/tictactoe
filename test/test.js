var assert    = require('assert');
var appTest = require('../assets/js/tictactoe.js');

describe("Tictactoe app test",function() {

  var app;

  before(function() {
    app = new appTest.Tictactoe();
  })

  /*
    Tablero vacio significa esto
    [["x","o","+"],
     ["+","x","+"],
     ["+","o","x"]]
  */
  it("Poder iniciar un nuevo juego", function() {
    app.newBoard();
    assert.deepEqual([["+","+","+"],["+","+","+"],["+","+","+"]],app.board);
  });

  it("Un jugador X debe poder hacer su jugada",function() {
    var tableroG = [["x","+","+"],
                    ["+","+","+"],
                    ["+","+","+"]]

    app.play(0);
    assert.deepEqual(tableroG,app.board);

    tableroG = [["x","+","+"],
                ["+","o","+"],
                ["+","+","+"]]
    app.play(4);
    assert.deepEqual(tableroG,app.board);

    tableroG = [["x","+","+"],
                ["+","o","+"],
                ["+","+","x"]]
    app.play(8);
    assert.deepEqual(tableroG,app.board);
  });

  it("Validar que algún jugador ganó el juego",function() {

    var tableroG = [["x","x","x"],
                    ["o","o","+"],
                    ["+","+","+"]];

    app.newBoard();
    app.play(0);
    app.play(3);
    app.play(1);
    app.play(4);
    app.play(2);
    assert.deepEqual(tableroG,app.board);
    assert.equal(true,app.checkWinner());

    app.newBoard();

        tableroG = [["x","o","+"],
                    ["x","o","+"],
                    ["x","+","+"]];

    app.play(0);
    app.play(1);
    app.play(3);
    app.play(4);
    app.play(6);
    assert.deepEqual(tableroG,app.board);
    assert.equal(true,app.checkWinner());
    app.newBoard();

        tableroG = [["x","o","+"],
                    ["+","x","o"],
                    ["+","+","x"]];

    app.play(0);
    app.play(1);
    app.play(4);
    app.play(5);
    app.play(8);
    assert.deepEqual(tableroG,app.board);
    assert.equal(true,app.checkWinner());
    app.newBoard();
  });

  it("Valida que hay empate",function() {

  });
});
