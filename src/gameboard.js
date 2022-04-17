const Ship = require('./shipFactory')

const Gameboard = () => {
    const missedShots = [];
    const receivedShots = [];
    const shipCount = {
        'AC': {
            size: 4,
            count: 1
        },
        'Battleship': {
            size: 3,
            count: 2
        },
        'LC': {
            size: 2,
            count: 3
        },
        'PatrolBoat': {
            size: 1,
            count: 4
        },
    }
    const ships = [];
    function placeShip(coordinates) {
        let newShip = Ship(coordinates);
        ships.push(newShip);
    }
    function receiveAttack(hitLocation) {
        ships.forEach((ship) => {
            const foundHit = ship.position.find(val => val === hitLocation);
            if(foundHit) {
                ship.hit(hitLocation);
                receivedShots.push(hitLocation)
            } else missedShots.push(hitLocation);
        })
    }
    function checkIfAllShipAreSunk() {
        let allSunk = false;
        for (let ship of ships) {
            if (ship.isSunk()) {
                allSunk = true;
            } else {
                allSunk = false;
                return allSunk;
            }
        }
        return allSunk;
    }
    return {
        shipCount: shipCount,
        placeShip: placeShip,
        ships: ships,
        missedShots: missedShots,
        receivedShots: receivedShots,
        receiveAttack: receiveAttack,
        checkIfAllShipAreSunk: checkIfAllShipAreSunk,
    }
}

module.exports = Gameboard;







