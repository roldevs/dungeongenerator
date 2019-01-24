

const gridModule = function(length, height) {
    let gridCells = [];
    const init = function() {
        gridCells = new Array(length);
        for(i=0;i<length;i++){
            gridCells[i] = new Array();
            for (j = 0; j < height; j++) {
                set(i, j, " ");
            }
        }
        return gridCells;
    }

    const set = function(x, y, value) {
        gridCells[x][y] = value;
        return gridCells;
    }

    const grid = function() {
        // Care of immutability
        return gridCells;
    }

    return {
        init,
        set,
        grid,
    }
}

module.exports = {
    gridModule
}
