//playerFactory
const player = (name) => {
    const welcome = () => console.log('Welcome!');
    return {name, welcome};
}

const player1 = player('Erik');
const player2 = player('Anh');

//gameFlowModule pattern
const gameFlow = (() => {

    //loop for turns, checking turns based on even and odd
    for (i = 0; i < gameBoard.array.length; i++) {
        if(i % 2 == 0) {
            playarea.value = "X";
        }
        else {
            playarea.value = "O";
        }
    }
    })();

//gameboardModule pattern
const gameBoard = (() => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const board = document.getElementsByTagName("playarea");
    //need to make choice below connect somehow with gameflow, do with prototype
    document.getElementById("block0").addEventListener("click", gameFlow)
    return {
        array,
        board,
    }
})();





