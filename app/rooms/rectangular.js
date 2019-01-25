const roomRectangularModule = function(gridModule) {
    const create = function(maxLength, maxHeight) {
        let length = Math.floor(Math.random() * maxLength + 1);
        let height = Math.floor(Math.random() * maxHeight + 1);

        for(i = length; i<maxLength; i++){
            for (j = height; j < maxHeight; j++) {
                gridModule.set(i, j, ".");
            }
        }

        return gridModule;
    }

    return {
        create
    }
}

module.exports = {
    roomRectangularModule
}