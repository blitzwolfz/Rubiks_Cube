let angle, pieces, cubeSize, size, sizeMult, colors, cubeLength;
function setup() {
    createCanvas(600, 600, WEBGL);
    init();
}

function init() {
    angle = 1;
    pieces = [];
    
    cubeSize = 10;    // Change this to change the size of the cube
    
    sizeMult = width / 2;    // Relative size of the cube on screen
    size = sizeMult / cubeSize;
    cubeLength = size * cubeSize;
    
    initColors();
    initPieces();
    
    // testPieces();
}

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

function testPieces() {
    for (let i = 0; i < cubeSize; i++) {
        for (let j = 0; j < cubeSize; j++) {
            pieces.push(new Piece(i, j, floor(random(6))));
            
        }
    }
}

let a = 0;
function draw() {
    background(0);
    camera(0, 0, 500, 0, 0, 0, 0, 1, 0);
    
    // The units are in Radians, I will change it to degrees
    let deg = 3.14 / 180; 
    
    rotateX(-45 * deg);
    rotateY(45 * deg);
    
    drawCube();

    
}
function keyPressed() {
    if (key === '1') turnRight(0);
    if (key === '2') turnUp(0);
    if (key === '3') turnFront(0);
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

function checkDir(d) {
    if (d > 0) return 1;
    else return -1;
}

function turnUp(row) {
    for (p of pieces) {
        // Directly affected sides: 0, 1, 3, 4
        if (p.x === row) {
            if (p.side === 0) {
                p.side = 1;
            } else if (p.side === 1) {
                p.side = 3;
            } else if (p.side === 3) {
                p.side = 4;
            } else if (p.side === 4) {
                p.side = 0;
            }
        }
        
        // The top or bottom will also rotate (depending on the row)


        // TODO: Figure out how to convert this using p.x and p.y
        // Hard Coded for 2x2
        // if (row === 0) {
        //     if (p.side === 2) {
        //         if (p.y === 0) {
        //             if (p.x === 0) {
        //                 p.x = 1;
        //             } else if (p.x === 1) {
        //                 p.y = 1;
        //             }
        //         } else if (p.y === 1) {
        //             if (p.x === 0) {
        //                 p.y = 0;
        //             } else if (p.x === 1) {
        //                 p.x = 0;
        //             }
        //         }
        //     }
        // }
        
        else if (row === cubeSize - 1) {

        }
    }
}

function turnRight(row) {
    for (p of pieces) {
        // Directly affected sides:
        // Turn right away from you
        // White(0) -> blue(2)    blue(2) -> yellow(3)      yellow(3) -> green(5)       green(5) -> white(0)
        
        if (p.y === row) {
            if (p.side === 0) {
                p.side = 2;
            } else if (p.side === 2) {
                p.side = 3;
            } else if (p.side === 3) {
                p.side = 5;
            } else if (p.side === 5) {
                p.side = 0;
            }
        }
    }
}

function turnFront(row) {

}