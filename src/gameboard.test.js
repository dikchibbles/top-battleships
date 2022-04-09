const Gameboard = require('./gameboard')

test('Create a new ship with gameboard', () => {
    let newGb = Gameboard();
    newGb.placeShip(['a4', 'a5', 'a6', 'a7']);
    expect(newGb.ships[0].position).toStrictEqual(['a4', 'a5', 'a6', 'a7'])
})

test('Check that the receiveAttack function hits the ship', () => {
    let newGb = Gameboard();
    newGb.placeShip(['a2', 'a3']);
    newGb.receiveAttack('a3')
    expect(newGb.missedShots[0]).toBe(undefined)
})

test('Check that the receiveAttack function doesn\'t hit the ship', () => {
    let newGB = Gameboard();
    newGB.placeShip(['a1', 'a2']);
    newGB.placeShip(['a5'])
    newGB.receiveAttack('a3');
    expect(newGB.missedShots[0]).toBe('a3')
})

test('Check that the checkIfAllShipsAreSunk returns true if all ships are sunk', () => {
    let newGB = Gameboard();
    newGB.placeShip(['a1']);
    newGB.receiveAttack('a1');
    newGB.placeShip(['a2']);
    newGB.receiveAttack('a2');
    expect(newGB.checkIfAllShipAreSunk()).toBe(true)
})


test('Check that the checkIfAllShipsAreSunk returns false if not all ships are sunk', () => {
    let newGB = Gameboard();
    newGB.placeShip(['a1']);
    newGB.receiveAttack('a1');
    newGB.placeShip(['a3', 'a4', 'a5']);
    newGB.receiveAttack('a3');
    newGB.receiveAttack('a4');
    expect(newGB.checkIfAllShipAreSunk()).toBe(false);
})









