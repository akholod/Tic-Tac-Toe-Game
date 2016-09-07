
 class Player {
    constructor(name) {
        this.name = name;
        this.mark = '';
        this.cells = [];
    }

    static checkRivalMark(mark) {
        console.log('checkRival');
        if(mark === 'cellX') {
            return 'cellY';
        }
        return 'cellX';

    }
    //this function make human player move, if his turn now
    makeMove(cell, board) {
        if (!board.humanPlayerMove) {
            return;
        }
        if(cell.hasClass(this.mark) || cell.hasClass(Player.checkRivalMark(this.mark))) {
            return;
        }
        cell.addClass(this.mark);
        board.gameBoard[cell.attr('valueX')][cell.attr('valueY')] = this.mark;
        board.humanPlayerMove = false;
    }
}