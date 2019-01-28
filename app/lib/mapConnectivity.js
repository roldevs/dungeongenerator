let Graph = require("@dagrejs/graphlib").Graph;
let alg= require("@dagrejs/graphlib").alg;

const mapConnectivityModule = function () {
    let myGraph = null;

    const init = function (matrix) {
        myGraph = new Graph({ directed: false, compound: false, multigraph: false });

        for (i = 0; i < matrix.length; i++) {
            for (j = 0; j < matrix.length; j++) {
                if(matrix[i][j] === '.'){
                    myGraph.setNode(i.toString() + "," + j.toString(), i.toString() + "," + j.toString());
                    //if (i > 0 && j > 0 && matrix[i-1][j-1] ==='.') { 
                    //    myGraph.setEdge(i.toString() + "," + j.toString(), (i - 1).toString() + "," + (j - 1).toString()); 
                    //    }
                    if (i > 0 && matrix[i-1][j] === '.') { 
                        myGraph.setEdge(i.toString() + "," + j.toString(), (i - 1).toString() + "," + j.toString()); 
                        }
                    //if (i > 0 && j < matrix[i].length && matrix[i-1][j+1] === '.') { 
                    //    myGraph.setEdge(i.toString() + "," + j.toString(), (i - 1).toString() + "," + (j + 1).toString()); 
                    //    }
                    if (j > 0 && matrix[i][j-1]) { 
                        myGraph.setEdge(i.toString() + "," + j.toString(), i.toString() + "," + (j - 1).toString()); 
                        }
                }
            }
        }
    }

    const checkConnectivity = function () {
        let myComponents = alg.components(myGraph);

        if (myComponents.length === 1) {
            return true;
        }

        return false;
    }

    return {
        init,
        checkConnectivity
    }
}

module.exports = {
    mapConnectivityModule
}
