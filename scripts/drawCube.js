function initColors() {
    colors = [
        [255, 255, 255],    // White
        [255, 255, 0],      // Yellow
        [255, 165, 0],      // Orange
        [255, 0, 0],        // Red
        [0, 255, 0],        // Green
        [0, 0, 255],        // Blue
    ];
    
    // An alternate color pallete
    secondaryColors = [
        [255, 255, 255],    // White
        [255, 165, 0],      // Orange
        [0, 180, 255],      // Blue
        [230, 255, 75],     // Yellow
        [255, 50, 100],     // Red
        [0, 255, 100],      // Green
    ];
    
    colors = secondaryColors;   // Comment this out to use original color pallette
    
    // Just a quick check if the colours are valid
    for (c of colors) {
        for (let i = 0; i < 3; i++) {
            if (c[i] > 255) c[i] = 255;
            else if (c[i] < 0) c[i] = 0;
        }
    }
}

function initPieces() {
    for (let c = 0; c < 6; c++) {
        for (let i = 0; i < cubeSize; i++) {
            for (let j = 0; j < cubeSize; j++) {
                pieces.push(new Piece(i, j, c));
            }
        }
    }
}

// Pieces to test rendering
function testPieces() {
    for (let i = 0; i < cubeSize; i++) {
        for (let j = 0; j < cubeSize; j++) {
            pieces.push(new Piece(i, j, floor(random(6))));
            
        }
    }
}

function drawCube() {
    // Drawing the little cubies
    // (0,0) is the direct center, so I need to offset this
    // To do this will just be half of the size of the full cube
    
    // translate(cubeLength / 2, - cubeLength / 2);
    for (p of pieces) {
        let i = p.x;
        let j = p.y;
        let c = p.col;
        let s = p.side;
        
        if (c > 5) c = 5;
        else if (c < 0) c = 0;
        
        offset = 0;
        
        fill(colors[c]);
        
        // Front
        if (s === 0) {
            beginShape(); {
                vertex(j * size, i * size, 0);
                vertex(j * size + size, i * size, 0);
                vertex(j * size + size, i * size + size, 0);
                vertex(j * size, i * size + size, 0);
            } endShape();
        }
        
        // Left
        if (s === 1) {
            beginShape(); {
                vertex(0, size * i, -size * j);
                vertex(0, size * i, -size - (size * j));
                vertex(0, size + (size * i), -size + (-size * j));
                vertex(0, size + (size * i), -size * j);
            } endShape();
        }
        
        // Top
        if (s === 2) {
            beginShape(); {
                vertex(size * j, 0, -size * i);
                vertex(size * j, 0, -size + (-size * i));
                vertex(size + size * j, 0, -size + (-size * i));
                vertex(size + size * j, 0, -size * i);
            } endShape();
        }
        
        /* The Dimensions are the same, but everything needs to be shifted by the size of the entire cube
        in the direction that is constantly 0 in the previous shapes 
        */
        
        // Back
        if (s === 3) {
            beginShape(); {
                vertex(j * size, i * size, (-size * cubeSize));
                vertex(j * size + size, i * size, -cubeLength);
                vertex(j * size + size, i * size + size, -cubeLength);
                vertex(j * size, i * size + size, -cubeLength);
            } endShape();
        }
        
        // Left
        if (s === 4) {
            beginShape(); {
                vertex(cubeLength, size * i, -size * j);
                vertex(cubeLength, size * i, -size - (size * j));
                vertex(cubeLength, size + (size * i), -size + (-size * j));
                vertex(cubeLength, size + (size * i), -size * j);
            } endShape();
        }
        
        // Bottom
        if (s === 5) {
            beginShape(); {
                vertex(size * j, cubeLength, -size * i);
                vertex(size * j, cubeLength, -size + (-size * i));
                vertex(size + size * j, cubeLength, -size + (-size * i));
                vertex(size + size * j, cubeLength, -size * i);
            } endShape();
        }
    }
}