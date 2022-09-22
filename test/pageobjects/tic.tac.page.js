

const Page = require('./page');


class TicTacPage extends Page {
  
    get inputGridSize () {
        return $('#number');
    }

    get btnPlay (){
        return $('#start');
    }

    get endGameBanner (){
        return $('#endgame');
    }

    async gridInputText (num){
        const elem = await $('//*[@id="'+num+'"]');
        var text = elem.getText();
        return text;
    }

    /**
     * retrieve the selected grid element and perform a click action
     * simulating a player move
    */

    async playMove (num){
        const elem = await $('//*[@id="'+num+'"]')
        elem.click();
    }

    async startGame (gridSize){
        await this.inputGridSize.setValue(gridSize);
        await this.btnPlay.click();

    }

    async playGameWin () {
        await this.playMove(0);
        await this.playMove(6);
        await this.playMove(8);
        await this.playMove(4);
        await this.playMove(2);
        await this.playMove(5);
        await this.playMove(1);
    }

    async playGameDraw () {
        await this.playMove(0);
        await this.playMove(4);
        await this.playMove(8);
        await this.playMove(6);
        await this.playMove(2);
        await this.playMove(5);
        await this.playMove(3);
        await this.playMove(1);
        await this.playMove(7);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('tictac');
    }
}

module.exports = new TicTacPage();
