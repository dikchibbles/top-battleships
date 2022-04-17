const {Player, Computer} = require('./ai')
import {createGameboards} from './domManipulation';

createGameboards();

const player1 = Player('test');
const computer = Computer();
let shipSize = 0;
let shipName = '';
let shipCount = 0;

const acBtn = document.getElementById('AC');
const battleshipBtn = document.querySelector('#Battleship');
const lcBtn = document.querySelector('#LC');
const patrolBtn = document.querySelector('#PatrolBoat');
const allBtns = [acBtn, battleshipBtn, lcBtn, patrolBtn];
allBtns.forEach(button => {
    button.addEventListener('click', () => {
        shipSize = player1.playerGB.shipCount[button.id].size;
        shipName = button.id;
        shipCount = player1.playerGB.shipCount[button.id].count;
    })
})

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

const p1ShipsDiv = document.querySelector('#ships-p1');
let chosenCoordinates = [];
p1ShipsDiv.addEventListener('click', (e) => {
    let shipId = e.target.dataset.shipId;
    console.log(chosenCoordinates)
    if(e.target.classList.contains('chosen') && chosenCoordinates.includes(shipId)) {
        chosenCoordinates.splice(chosenCoordinates.indexOf(shipId), 1);
        e.target.classList.toggle('chosen');
    } else {
        if (chosenCoordinates.length !== shipSize){
            e.target.classList.add('chosen');
            chosenCoordinates.push(shipId);
        } else if (chosenCoordinates.length === shipSize) {
            player1.playerGB.placeShip(chosenCoordinates);
            chosenCoordinates = [];
        }
    }
})

// The gameboard for the player to choose which spaces to attack
const compShipsDiv = document.querySelector('#ships-p2');
computer.computerGB.placeShip(['a1', 'a2', 'a3']);
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


