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