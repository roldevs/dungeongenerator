const { expect } = require('chai');
const { gridModule } = require('../../app/grid');
const { roomRectangularModule } = require('../../app/rooms/rectangular');

describe("roomRectangularModule", function(){
    describe("with a 20x20 grid", function(){
        const myGrid = gridModule(20,20);
        describe("#create(4x4)", function(){
            it("creates a 4x4 room inside the grid", function(){
                const room = roomRectangularModule(myGrid);
                expect(room.create(2, 2).grid()).to.be.a('array')
            });
        });
    });
});