const { expect } = require('chai');
const { mapConnectivityModule } = require('../../app/lib/mapConnectivity');

describe("mapConnectivityModule", function () {
    describe("Creating a 5x5 matrix with a 2x2 connected floor", function () {
        let map = [
            [null, null, null, null, null],
            [null, null, '.', '.', null],
            [null, null, '.', '.', null],
            [null, null, null, null, null],
            [null, null, null, null, null]
        ];
        it("#Floor is connected", function () {
            myGraph = new mapConnectivityModule(map);
            const connected = myGraph.checkConnectivity();
            expect(connected).to.equal(true);
        });
    });
    describe("Creating a 5x5 matrix with 2 1x1 unconnected floor", function () {
        let map = [
            [null, null, null, null, null],
            [null, null, '.', null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, '.', null, null]
        ];
        it("#Floor is not connected", function () {
            myGraph = new mapConnectivityModule(map);
            const connected = myGraph.checkConnectivity();
            expect(connected).to.equal(false);
        });
    });
});