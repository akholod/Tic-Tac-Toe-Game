/*import {Player} from './Player'*/

 class CompPlayer extends Player {
    makeMove(board){
        var self = this;
        function move(cell) {
            cell.addClass(self.mark);
            board.gameBoard[cell.attr('valueX')][cell.attr('valueY')] = self.mark;
            self.cells.push(cell.attr('id'));
            board.humanPlayerMove = true;
        }
        if (board.humanPlayerMove) {
            return;
        }
        //at first check central cell
        if(board.checkCentral()) {
            move($('#5'));
            return;
        }
        //then check whether it is possible human wins by one move
        let oneStepForWin = board.checkOneStepForWin(this.mark);
        if(oneStepForWin) {
            move(oneStepForWin);
            return;
        }
        //then check whether it is possible computer wins by one move
        oneStepForWin = board.checkOneStepForWin(Player.checkRivalMark(this.mark));
        if(oneStepForWin) {
            move(oneStepForWin);
            return;
        }
        //then check special combinations
        let specCombo = board.checkSpecialWinCombo(this.mark);
        if (specCombo) {
            move(specCombo);
            return
        }
        //then check whether any free corner cell
        let cornerCell = board.checkCornerCell(this.mark);
        console.log(cornerCell);
        if (cornerCell) {
            move(cornerCell);
            return;
        }
        //then check whether any free side cell
        let sideCell = board.checkSideCell();
        if (sideCell) {
            move(sideCell);
            return
        }
        //then check whether any free cell
        let anyFree = board.checkAnyFreeCell();
        if(anyFree) {
            move(anyFree);
        }
        //if all cell is marked then game draw
        game.draw();
    }
}