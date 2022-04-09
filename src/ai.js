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
    function attackEnemy (enemyGB) {
        let index = getRandomPosition(possibleShots.length);
        let newShot = possibleShots[index];
        enemyGB.receiveAttack(newShot)
        possibleShots.splice(index, 1)
        madeShots.push(newShot);
    }
    return {
        computerGB: computerGB,
        madeShots: madeShots,
        attackEnemy: attackEnemy,
    }
}

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}









