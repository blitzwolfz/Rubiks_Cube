let pieces, cube;
let cubeSize, size, sizeMult, cubeLength;
let colors;

function setup() {
    createCanvas(800, 800, WEBGL);
    init();
}

function init() {
    pieces = [];

    cubeSize = 3;    // Change this to change the dimensions of the cube
    
    sizeMult = width / 5;           // Relative size of the cube on screen
    size = sizeMult / cubeSize;     // Size of each cubie
    cubeLength = size * cubeSize;   // Full size of the cube on screen

    cube = new Cube();
    cube.init();
}

let a = 0;
let b = 0;
function draw() {
    background(0);
    rotateX(-PI / 8);
    rotateY(PI / 4);
    translate(-cubeLength / 2, -cubeLength / 2, -cubeLength / 2);

    rotateY(a);
    a+=0.01;
    cube.update();
}

function keyPressed() {
    if (key === '1') turnRight();
    if (key === '2') turnUp();
}