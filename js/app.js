/*
import {Board} from "./Board";
import {Player} from "./Player";
import {CompPlayer} from "./ComputerPlayer";*/

$(function() {  //Free Code Camp challenge. coded by Andrey
    'use strict';

    //game object
    var game = {
        //game initialization, we create promise, in promise we create new instance of classes and set start values
        //when promise is is resolved we call modal window, with player mark choose.
        init() {
            var promise = new Promise((resolve) => {
                this.human = new Player('human');
                this.comp = new CompPlayer('comp');
                this.gameBoard = new Board(gameCells);
                this.gameBoard.humanPlayerMove = true;
                this.human.mark = 'cellX';
                this.comp.mark = 'cellY';
                this.gameBoard.resetBoard();
                resolve();
            });
            promise.then(() => {
                $('#startModal').modal();
                $('#playerO').on('click', () => {
                    this.gameBoard.resetBoard();
                    this.gameBoard.humanPlayerMove = false;
                    this.human.mark = 'cellY';
                    this.comp.mark = 'cellX';
                    this.comp.makeMove(this.gameBoard);
                });
            });
        },
        //when game draw call modal window with message, and re-init game
        draw() {
            let modal = $('#startModal');
            modal.find('.modal-body').text('It is draw!');
            modal.modal();
            this.init();
        },
        //when somebody win call modal window with message, and re-init game
        win (whoWin) {
        let modal = $('#startModal');
        let winner = 'Computer wins!';
        if (whoWin == 'human') {
            winner = 'You Win!'
        }
        modal.find('.modal-body').text(winner);
        modal.modal();
        this.init();
        }
    };

    //first game init
    let gameCells = $('td');
    game.init();
    //bind makeMove functions to cells
    gameCells.on('click', function() {
        var self = $(this);

        game.human.makeMove(self, game.gameBoard);
            if(game.gameBoard.checkWin(game.human.mark)) {
                game.win('human');
            }
        game.comp.makeMove(game.gameBoard);
            if(game.gameBoard.checkWin(game.comp.mark)) {
                game.win();
            }
        });
});