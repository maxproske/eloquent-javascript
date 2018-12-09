/**
 * Write a program that creates a string that 
 * represents an 8×8 grid, using newline characters 
 * to separate lines. At each position of the grid 
 * there is either a space or a "#" character. The 
 * characters should form a chessboard.
 */

function chessboard(size) {
    let str = "";
    for (let i = 0; i < size; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < size; j++) {
                if (j % 2 == 0) {
                    str += " ";
                } else {
                    str += "#";
                }
            }
        } else {
            for (let j = 0; j < size; j++) {
                if (j % 2 == 0) {
                    str += "#";
                } else {
                    str += " ";
                }
            }
        }
        str += "\n";
    }
    return str;
}

let size = 8;
console.log(chessboard(size));