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
    for (p of pieces) {
        // Directly affected sides are: 
        // Blue (2) -> Orange (1)       Orange(1) -> Green(5)       Green(5) -> Red(4)      Red(4) -> Blue(2)

        if (p.x === row) {
            if (p.side === 2) {
                p.side = 1;
            } else if (p.side === 1) {
                p.side = 5;
            } else if (p.side === 5) {
                p.side = 4;
            } else if (p.side === 4) {
                p.side = 2;
            }
        }
    }
}