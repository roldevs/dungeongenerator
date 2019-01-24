
function rectangular(grid, maxLength, maxHeight){
    let length = Math.floor(Math.random() * maxLength + 1);
    let height = Math.floor(Math.random() * maxHeight + 1);

    for(i = length; i<maxLength; i++){
        for (j = height; j < maxHeight; j++) {
            grid[i][j] = ".";
        }
    }

    return grid;
}

exports.createRoom = function(length, height){
    let grid = new Array(length);
    for(i=0;i<length;i++){
        grid[i] = new Array();
        for (j = 0; j < height; j++) {
            grid[i][j] = " ";
        }
    }

    let floor = rectangular(grid, length, height);
    console.log(floor);
    return floor;
}