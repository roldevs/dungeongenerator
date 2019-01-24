const { expect } = require('chai');
const { gridModule } = require('../app/grid');

describe("gridModule", function(){
    describe("with a 2x2 grid", function(){
        const myGrid = gridModule(2,2);
        describe("#init", function(){
            it("creates a 2x2 array", function(){
                expect(myGrid.init()).to.eql([[' ', ' '], [' ', ' ']])
            });
        });
        describe("#set", function(){
            it("sets an specific cell", function(){
                myGrid.init()
                expect(myGrid.set(1, 1, '.')).to.eql([[' ', ' '], [' ', '.']])
            });
        });
    });
});
