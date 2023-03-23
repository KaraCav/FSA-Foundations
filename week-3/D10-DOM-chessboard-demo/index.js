document.addEventListener("DOMContentLoaded", function () {
    
    function createChessBoard() {
    let container = document.getElementById("board-container");

    for (let index = 0; index < 8; index++) {
        let row = document.createElement("tr");
        container.appendChild(row);

        for (let jindex = 0; jindex < 8; jindex++) {
            let square = document.createElement("td");
            square.classList.add("box");
            row.appendChild(square);

            if((index + jindex ) % 2 === 0) {
                square.classList.add("purple");
            }
        }
    }
}
createChessBoard();
});

// div {
//     styles : {
//         background-color: green;
//     }
//     height: 70px;
//     width: 80px;
//     classList : ['box', 'purple']
// }

// let myArr = [[0, 0][0,1],[0,2]];
// myArr[1][0]

