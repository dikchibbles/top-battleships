const Ship = require('./shipFactory')

const Gameboard = () => {
    const missedShots = [];
    const ships = [];
    function placeShip(coordinates) {
        ships.push(Ship(coordinates));
    }
    function receiveAttack(hitLocation) {
        ships.forEach((ship) => {
            const foundHit = ship.position.find(val => val === hitLocation);
            if(foundHit) ship.hit(hitLocation);
            else missedShots.push(hitLocation);
        })
    }
    function checkIfAllShipAreSunk() {
        let allSunk = false;
        for (let ship of ships) {
            if (ship.isSunk()) {
                allSunk = true;
            } else {
                allSunk = false;
            }
        }
        return allSunk;
    }
    return {
        placeShip: placeShip,
        ships: ships,
        missedShots: missedShots,
        receiveAttack: receiveAttack,
        checkIfAllShipAreSunk: checkIfAllShipAreSunk,
    }
}

module.exports = Gameboard;







