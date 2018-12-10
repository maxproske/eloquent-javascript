/**
 * Write a program that creates a string that 
 * represents an 8×8 grid, using newline characters 
 * to separate lines. At each position of the grid 
 * there is either a space or a "#" character. The 
 * characters should form a chessboard.
 */

function chessboard(width, height) {
    let board = "";
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            board += ((x + y) % 2 == 0) ? " " : "#";
        }
        board += "\n";
    }
    return board;
}

let width = 8,
    height = 8;
console.log(chessboard(width, height));
