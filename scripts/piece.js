class Piece {
    constructor(x, y, col) {
        // Needs a position in the cube and a color
        this.x = x;
        this.y = y;
        this.col = col;        
        this.side = col;
    }

    getPosition() {
        console.log(this.x);
    }
}