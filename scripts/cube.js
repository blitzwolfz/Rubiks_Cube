var picker;
class Cube {
    constructor() {
        this.x = 0;
    }

    init() {
        this.makeColors();
        this.createCube();
    }

    update() {
        this.show();
        
        // Update the colors
        for (let i = 0; i < 6; i++) {
            colors[i] = picker[i].color();
        }
    }

    makeColors() {
        colors = ['#00FF00','#FF0000','#FFFFFF','#0000FF','#FFA500','#FFFF00'];
        picker = [6];
        for (let i = 0; i < 6; i++) {
            picker[i] = createColorPicker(colors[i]);
        }
    }

    createCube() {
        // Pushes the pieces to an array
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < cubeSize * cubeSize; j++) {
                pieces.push(new Piece(j, i, floor(random(6))));
            }
        }
    }

    show() {
        let dim = cubeLength;
        let counter = 0;

        for (let side = 0; side < 6; side++) {
            for (let i = 0; i < cubeSize; i++) {
                for (let j = 0; j < cubeSize; j++) {
                    let s = pieces[counter].side;

                    fill(colors[pieces[counter].c]);
                    if (s < 0 || s > 5) return;
                    else if (s === 0) this.drawFront(i, j, 0);
                    else if (s === 1) this.drawSide(0, j, i);
                    else if (s === 2) this.drawTop(i, 0, j);
                    else if (s === 3) this.drawFront(i, j, dim);
                    else if (s === 4) this.drawSide(dim, j, i);
                    else if (s === 5) this.drawTop(i, dim, j);
                    counter++;
                }
            }
        }
    }

    drawFront(x, y, z) {
        beginShape(); {
            vertex(x * size, y * size, z);
            vertex(x * size + size, y * size, z);
            vertex(x * size + size, y * size + size, z);
            vertex(x * size, y * size + size, z);
        } endShape();
    }

    drawSide(x, y, z) {
        beginShape(); {
            vertex(x, y * size, z * size);
            vertex(x, y * size, z * size + size);
            vertex(x, y * size + size, z * size + size);
            vertex(x, y * size + size, z * size);
        } endShape();
    }

    drawTop(x, y, z) {
        beginShape(); {
            vertex(x * size, y, z * size);
            vertex(x * size + size, y, z * size);
            vertex(x * size + size, y, z * size + size);
            vertex(x * size, y, z * size + size);
        } endShape();
    }
}