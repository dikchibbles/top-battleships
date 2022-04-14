const {Player, Computer} = require('./ai')
import createGameboards from './domManipulation';

createGameboards();

const player1 = Player('test');
const computer = Computer();

// Setting the Player Ships on the player gameboard
const p1ShipsDiv = document.querySelector('#ships-p1');
p1ShipsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('chosen')) {
        const shipToRemove = player1.playerGB.ships.indexOf(player1.playerGB.ships.find(val => val.position === e.target.dataset.shipId));
        player1.playerGB.ships.splice(shipToRemove, 1);
        console.log(player1.playerGB.ships)
    } else {
            player1.playerGB.placeShip([e.target.dataset.shipId]);
            console.log(player1.playerGB.ships);
    }
    e.target.classList.toggle('chosen');
})

// The gameboard for the player to choose which spaces to attack
const compShipsDiv = document.querySelector('#ships-p2');
computer.computerGB.placeShip(['a1']);
computer.computerGB.placeShip(['f8']);
compShipsDiv.addEventListener('click', (e) => {
    computer.computerGB.receiveAttack(e.target.dataset.shipId);
    if (computer.computerGB.receivedShots.includes(e.target.dataset.shipId)) {
        e.target.classList.add('hit');
    } else {
        e.target.classList.add('miss');
    }
})

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}


