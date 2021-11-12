let angleX, angleY, pieces, cubeSize, size, sizeMult, colors, cubeLength, camSpeed;
function setup() {
    createCanvas(800, 800, WEBGL);
    init();
}

function init() {
    angleX = 500;
    angleY = 0;
    pieces = [];
    
    cubeSize = 3;    // Change this to change the dimensions of the cube
    
    sizeMult = width / 3;    // Relative size of the cube on screen
    size = sizeMult / cubeSize;     // Size of each cubie
    cubeLength = size * cubeSize;   // Full size of the cube on screen

    camSpeed = 10;
    frameRate(60);

    initColors();
    initPieces();
    background(0);
}

let a = 0;
function draw() {
    background(0);
    rotateX(-PI / 8);
    rotateY(PI / 4);
    translate(-cubeLength / 2, -cubeLength / 2, cubeLength / 2);
    drawCube();
}

function keyPressed() {
    if (key === '1') turnRight(0);
    if (key === '2') turnUp(0);
    if (key === '3') turnFront(0);
}