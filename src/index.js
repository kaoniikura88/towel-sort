
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    let sorted = []
    for (let i=0; i<matrix.length; i++) {
        if(i%2 ===0) {
            sorted = sorted.concat(matrix[i])
        } else sorted = sorted.concat((matrix[i]).reverse())
    }
    return sorted;
}
