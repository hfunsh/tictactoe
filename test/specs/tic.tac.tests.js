const TicTacPage = require('../pageobjects/tic.tac.page');

describe('Tic Tac Toe Game', () => {
    it('should load the Tic Tac Toe page and play a game', async () => {
        await TicTacPage.open();
        await TicTacPage.startGame(3);

        await TicTacPage.playGameWin();
        await expect(TicTacPage.endGameBanner).toBeDisplayed();
        await expect(TicTacPage.endGameBanner).toHaveTextContaining("Congratulations player X! You've won. Refresh to play again!");
    });

    it('should load the Tac Tac Toe page and play a draw game', async () => {
        await TicTacPage.open();
        await TicTacPage.startGame(3)

        await TicTacPage.playGameDraw();
        await expect(TicTacPage.endGameBanner).toHaveTextContaining("The game has ended in a draw, Refresh to play again")
    })

    it('should should ensure that a player cannot enter a character in previously occupied grid slot', async () => {
        await TicTacPage.open();
        await TicTacPage.startGame(3);

        await TicTacPage.playMove(3);
        await TicTacPage.playMove(3);
        var text = await TicTacPage.gridInputText(3);
        expect(text).toEqual('X')
     })
});


