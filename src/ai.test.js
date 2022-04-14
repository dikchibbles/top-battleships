const {Player, Computer} = require('./ai')

test('check to see if the attackEnemy function for the computer, adds the madeshot to the madeshots list', () => {
    let randomFunction = (num) => {return num - 81};
    let enemy = Player('player');
    let computer = Computer();
    computer.attackEnemy(randomFunction, enemy.playerGB);
    expect(computer.possibleShots.length).toBe(80)
    expect(computer.madeShots[0]).toBe('a1')
})












