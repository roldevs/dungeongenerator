let Graph = require("@dagrejs/graphlib").Graph;

const mapConnectivityModule = function (matrix) {
    let myGraph = null;

    const init = function (matrix) {
        myGraph = new Graph({ directed: false, compound: false, multigraph: false });

        for (i = 0; i < matrix.length; i++) {
            for (i = 0; i < matrix.length; i++) {
                if(matrix[i][j] === '.'){
                    myGraph.setNode(i.toString() + "," + j.toString(), i.toString() + "," + j.toString());
                }
                if(i>0 && j>0){ myGraph.setEdge(i.toString() + "," + j.toString(), (i-1).toString() + "," + (j-1).toString());}
                if(i>0){ myGraph.setEdge(i.toString() + "," + j.toString(), (i-1).toString() + "," + j.toString());}
                if(i>0 && j < matrix[i].length){ myGraph.setEdge(i.toString() + "," + j.toString(), (i-1).toString() + "," + (j+1).toString());}
                if(j>0){ myGraph.setEdge(i.toString() + "," + j.toString(), i.toString() + "," + (j-1).toString());}

                return myGraph;
            }
        }
    }

    const checkConnectivity = function () {
        let myComponents = myGraph.alg.components(myGraph);

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
