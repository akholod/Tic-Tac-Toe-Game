 class Board {
    constructor(JqueryObj){
        this.boardJqueryObj = JqueryObj;
        this.boardJqueryObj.height(this.boardJqueryObj.width());
        this.gameBoard = [[[],[],[]],
            [[],[],[]],
            [[],[],[]]];
        this.winCombos = [[1,2,3], [4,5,6], [7,8,9],
            [1,4,7], [2,5,8], [3,6,9],
            [1,5,9], [3,5,7]];
    }
    //check whether the central cell is free
    checkCentral() {
        let temp = $('#5');
        if(!(temp.hasClass('cellX')) && !(temp.hasClass('cellY'))) {
            return true
        }
    }
    //heck whether there is an opportunity to end the game with one step
    checkOneStepForWin(mark) {
        let res;
        this.winCombos.forEach(function(item) {
            let inRowFree = 0;
            let inRowThisMark = 0;
            let freeCell = '';
            item.forEach((item) => {
                let temp = $('#' + item);
                if (temp.hasClass(mark)) {
                    ++inRowThisMark;
                }
                if (temp.attr('class') === 'cell' ) {
                    ++inRowFree;
                    freeCell = temp;
                }
            });
            if(inRowThisMark == 2 && inRowFree == 1) {
                res = freeCell;
            }
        });
        return res;
    }
    //check wining combo
    checkWin(mark) {
        let res;
        this.winCombos.forEach(function(item) {
            let count = 0;
            item.forEach((item) => {
                if ($('#' + item).hasClass(mark)) {
                    ++count;
                }
            });
            if(count == 3) {
                res =  true;
            }
        });
        return res;
    }
    //check whether the corner cells is free
    checkCornerCell(mark) {
        let cornerCells = [1, 3];
        let res;
        cornerCells.forEach((item) => {
            let temp = $('#' + item);
            if (!(temp.hasClass('cellX')) && !(temp.hasClass('cellY'))) {
                if((item == 1 && !($('#9').hasClass(mark))) || (item == 3 && !($('#7').hasClass(mark)))){
                    res =  temp;
                }
            }
        });
        return res;
    }
    //check whether the side cells is free
    checkSideCell() {
        let sideCells = [2, 4, 6, 8];
        let res;
        sideCells.forEach((item) => {
            let temp = $('#' + item);
            if (!(temp.hasClass('cellX')) && !(temp.hasClass('cellY'))) {
                res =  temp;
            }
        });
        return res;
    }
    //all special game combo here
    checkSpecialWinCombo(mark){
        let cells = [1, 4, 6, 8, 9];
        var empty = true;
        cells.forEach((item) => {
            let temp = $('#' + item);
            if(temp.hasClass(mark) || temp.hasClass(Player.checkRivalMark(mark))) {
                empty = false;
            }
        });
        if($('#3').hasClass(mark) && $('#5').hasClass(mark) && $('#2').hasClass(Player.checkRivalMark(mark)) && empty) {
            return $('#9')
        }
    }
    //check whether any free cell
    checkAnyFreeCell() {
        let cells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let res;
        cells.forEach((item) => {
            let temp = $('#' + item);
            if (!(temp.hasClass('cellX')) && !(temp.hasClass('cellY'))) {
                res =  temp;
            }
        });
        return res;
    }
    //reset all marks on board
    resetBoard() {
        let allCells = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        allCells.forEach((item) => {
            let temp = $('#' + item);
            temp.removeClass('cellX cellY');
        })
    }
}
