/**
 * Write a loop that makes seven calls to console.log 
 * to output the following triangle:
 * 
 * $ node looping_a_triangle 7
 * 
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

function print_triangle(height) {
    for (let i = 1; i <= height; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += "#";
        }
        console.log(str);
    }
}
print_triangle(process.argv[2]);