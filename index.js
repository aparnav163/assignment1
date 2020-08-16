window.onload=function(){
    let tiles = document.getElementById("shuffleAndSort");
    let tileCopy = [...tiles.children];


    function shuffle(items) {
        let tileCopy = [...items], //copy the original array
        swap, 
        tilesLength = tileCopy.length, 
        rand;
        while(--tilesLength) {
            rand = Math.floor(tilesLength * Math.random());
            swap = tileCopy[rand];
            tileCopy[rand] = tileCopy[tilesLength];
            tileCopy[tilesLength] = swap;
        }
        return tileCopy;
    }
    function shuffleNodes() {
        let nodes = tiles.children;
        nodes = [...nodes];
        nodes = shuffle(nodes);
        for(let index=0; index < nodes.length; index++) {
            tiles.appendChild(nodes[index]);
        }
    }
    
    function sortNodes() {
        // location.reload();

        let nodes = tileCopy;
        for(let index=0; index < nodes.length; index++) {
            tiles.appendChild(nodes[index]);
        }
    }
    document.getElementById("shuffle").onclick = shuffleNodes;
    document.getElementById("sort").onclick = sortNodes;
    
    } 