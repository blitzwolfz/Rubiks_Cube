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