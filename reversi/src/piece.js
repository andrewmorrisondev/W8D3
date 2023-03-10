/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    this.color = color;
};

//const colors = ['white','black'];

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    if (this.color === 'white') {
        return 'black';
    } else {
        return 'white';
    };
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.color === 'white' ? this.color = 'black' : this.color = 'white';
    
};

/**
 * Returns a string representation of the piece
 * based on its color.
 */
Piece.prototype.toString = function () {
    return this.color[0].toUpperCase();
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE