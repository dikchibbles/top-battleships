export default function createGameboards () {
    const p1Ships = document.querySelector('#ships-p1');
    const p2Ships = document.querySelector('#ships-p2');
    for (let i = 0; i < 10; i++) {
        let markerDivP1 = document.createElement('div');
        let markerDivComp = document.createElement('div');
        if (i === 0) {
            markerDivP1.textContent = '';
            markerDivComp.textContent = '';
        }
        else {
            markerDivP1.textContent = `${i}`;
            markerDivComp.textContent = `${i}`
        }
        markerDivP1.classList.add('marker');
        markerDivComp.classList.add('marker');
        p1Ships.append(markerDivP1);
        p2Ships.append(markerDivComp);
    }
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].forEach(letter => {
        for (let i = 0; i < 10; i++) {
            let shipDivP1 = document.createElement('div');
            let shipDivComp = document.createElement('div');
            if (i === 0) {
                shipDivP1.textContent = `${letter}`;
                shipDivComp.textContent = `${letter}`;
                shipDivP1.classList.add('marker-letter');
                shipDivComp.classList.add('marker-letter')
            } else {
                shipDivComp.dataset.shipId = `${letter}${i}`;
                shipDivP1.dataset.shipId = `${letter}${i}`;
                shipDivP1.classList.add('ship');
                shipDivComp.classList.add('comp-ship')
            }
            p1Ships.append(shipDivP1);
            p2Ships.append(shipDivComp);
        }
    }) 
}


function setShipOnGB (event, size) {
    let horLetter = event.target.dataset.shipId[0];
    let verNum = event.target.dataset.shipId[1];
    
}











