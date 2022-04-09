const Ship = require('./shipFactory')


test('Test if the hit function replaces the right position with hit', () => {
    let testShip = Ship(['a1', 'a2', 'a3']);
    testShip.hit(2)
    expect(testShip.position).toStrictEqual(['a1', 'a2', 'hit'])
})

test('Test if the isSunk function returns false if the shipHealth contains at least one star', () => {
    let testShip = Ship(['a1', 'a2', 'a3']);
    testShip.hit(0);
    testShip.hit(1);
    expect(testShip.isSunk()).toBe(false)
})

test('Test if the isSunk function returns true if all is hit', () => {
    let testShip = Ship(['a1', 'a2', 'a3', 'a4']);
    for (let i = 0; i < testShip.position.length; i++) {
        testShip.hit(i);
    }
    expect(testShip.isSunk()).toBe(true)
})





