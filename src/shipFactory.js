const Ship = (position) => {
    function hit (hitPos) {
        position.splice(hitPos, 1, 'hit');
    }
    function isSunk () {
        sunk = true;
        position.forEach(val => {
            if (val !== 'hit') sunk = false;
        })
        return sunk;
    }
    return {
        hit: hit,
        position: position,
        isSunk: isSunk,
    }
}


module.exports = Ship;





