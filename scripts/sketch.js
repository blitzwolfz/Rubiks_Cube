let angleX, angleY, pieces, cubeSize, size, sizeMult, colors, cubeLength, camSpeed;
function setup() {
    createCanvas(800, 800, WEBGL);
    init();
}

function init() {
    angleX = 500;
    angleY = 0;
    pieces = [];
    
    cubeSize = 3;    // Change this to change the size of the cube
    
    sizeMult = width / 3;    // Relative size of the cube on screen
    size = sizeMult / cubeSize;
    cubeLength = size * cubeSize;

    camSpeed = 10;
    frameRate(60);

    initColors();
    initPieces();
    background(0);
    // testPieces();
}

function draw() {
    translate(-cubeLength / 2, -cubeLength / 2, cubeLength / 2);
    drawCube();
}

function keyPressed() {
    if (key === '1') turnRight(0);
    if (key === '2') turnUp(0);
    if (key === '3') turnFront(0);
}

function mousePressed() {
    if (mouseButton === CENTER) {
        previousX = mouseX;
        previousY = mouseY;
    }
}

function mouseReleased() {
    mouseButton = 0;
}