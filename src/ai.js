const Gameboard = require('./gameboard')

const Player = (name) => {
    let playerGB = Gameboard();
    function attackEnemy (coordinates, enemyGB) {
        enemyGB.receiveAttack(coordinates);
    }
    return {
        name: name,
        playerGB: playerGB,
        attackEnemy: attackEnemy,
    }
}

const Computer = () => {
    let computerGB = Gameboard();
    const madeShots = [];
    const possibleShots = [];
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].forEach(letter => {
        for (let i = 1; i < 10; i++) {
            possibleShots.push(`${letter}${i}`)
        }
    }) 
    function attackEnemy (randomizer, enemyGB) {
        let index = randomizer(possibleShots.length);
        let newShot = possibleShots[index];
        enemyGB.receiveAttack(newShot)
        possibleShots.splice(index, 1)
        madeShots.push(newShot);
    }
    return {
        computerGB: computerGB,
        madeShots: madeShots,
        attackEnemy: attackEnemy,
        possibleShots: possibleShots,
    }
}


module.exports = {Player, Computer};







