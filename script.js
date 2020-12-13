//playerFactory
const player = (name) => {
    const name = document.querySelector("#names").addEventListener("input");
    // const playerName = () => {
    //     playName = document.querySelector("#names").innerHTML 
    //     return {playName};    
    // }
    const welcome = () => console.log('Welcome!');
    return {name, welcome,};
}

const playerX = player(theName);
const playerO = player(theName);

//gameFlowModule pattern
// const gameFlow = (() => {

//     //loop for turns, checking turns based on even and odd
//     for (i = 0; i < gameBoard.array.length; i++) {
//         if(i % 2 == 0) {
//             gameBoard.board.value = "X";
//         }
//         else {
//             gameBoard.board.value = "O";
//         }
//     }
//     })();

// //gameboardModule pattern
// const gameBoard = (() => {
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const board = document.getElementsByTagName("playarea");
//     //need to make choice below connect somehow with gameflow, do with prototype
//     document.getElementById("block0").addEventListener("click", gameFlow)
//     return {
//         array,
//         board,
//     }
// })();





