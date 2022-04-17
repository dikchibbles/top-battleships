/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\")\n\nconst Player = (name) => {\n    let playerGB = Gameboard();\n    function attackEnemy (coordinates, enemyGB) {\n        enemyGB.receiveAttack(coordinates);\n    }\n    return {\n        name: name,\n        playerGB: playerGB,\n        attackEnemy: attackEnemy,\n    }\n}\n\nconst Computer = () => {\n    let computerGB = Gameboard();\n    const madeShots = [];\n    const possibleShots = [];\n    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].forEach(letter => {\n        for (let i = 1; i < 10; i++) {\n            possibleShots.push(`${letter}${i}`)\n        }\n    }) \n    function attackEnemy (randomizer, enemyGB) {\n        let index = randomizer(possibleShots.length);\n        let newShot = possibleShots[index];\n        enemyGB.receiveAttack(newShot)\n        possibleShots.splice(index, 1)\n        madeShots.push(newShot);\n    }\n    return {\n        computerGB: computerGB,\n        madeShots: madeShots,\n        attackEnemy: attackEnemy,\n        possibleShots: possibleShots,\n    }\n}\n\n\nmodule.exports = {Player, Computer};\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/ai.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGameboards\": () => (/* binding */ createGameboards)\n/* harmony export */ });\nfunction createGameboards () {\n    const p1Ships = document.querySelector('#ships-p1');\n    const p2Ships = document.querySelector('#ships-p2');\n    for (let i = 0; i < 10; i++) {\n        let markerDivP1 = document.createElement('div');\n        let markerDivComp = document.createElement('div');\n        if (i === 0) {\n            markerDivP1.textContent = '';\n            markerDivComp.textContent = '';\n        }\n        else {\n            markerDivP1.textContent = `${i}`;\n            markerDivComp.textContent = `${i}`\n        }\n        markerDivP1.classList.add('marker');\n        markerDivComp.classList.add('marker');\n        p1Ships.append(markerDivP1);\n        p2Ships.append(markerDivComp);\n    }\n    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].forEach(letter => {\n        for (let i = 0; i < 10; i++) {\n            let shipDivP1 = document.createElement('div');\n            let shipDivComp = document.createElement('div');\n            if (i === 0) {\n                shipDivP1.textContent = `${letter}`;\n                shipDivComp.textContent = `${letter}`;\n                shipDivP1.classList.add('marker-letter');\n                shipDivComp.classList.add('marker-letter')\n            } else {\n                shipDivComp.dataset.shipId = `${letter}${i}`;\n                shipDivP1.dataset.shipId = `${letter}${i}`;\n                shipDivP1.classList.add('ship');\n                shipDivComp.classList.add('comp-ship')\n            }\n            p1Ships.append(shipDivP1);\n            p2Ships.append(shipDivComp);\n        }\n    }) \n}\n\n\nfunction setShipOnGB (event, size) {\n    let horLetter = event.target.dataset.shipId[0];\n    let verNum = event.target.dataset.shipId[1];\n    \n}\n\n/*\nexport function setShipSizeVarWhenBtnClicked (player, sSize) {\n    const acBtn = document.getElementById('AC');\n    const battleshipBtn = document.querySelector('#Battleship');\n    const lcBtn = document.querySelector('#LC');\n    const patrolBtn = document.querySelector('#PatrolBoat');\n    const allBtns = [acBtn, battleshipBtn, lcBtn, patrolBtn];\n    allBtns.forEach(button => {\n        button.addEventListener('click', () => {\n            sSize = player.playerGB.shipCount[button.id].size;\n        })\n    })\n} */\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/domManipulation.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ./shipFactory */ \"./src/shipFactory.js\")\n\nconst Gameboard = () => {\n    const missedShots = [];\n    const receivedShots = [];\n    const shipCount = {\n        'AC': {\n            size: 4,\n            count: 1\n        },\n        'Battleship': {\n            size: 3,\n            count: 2\n        },\n        'LC': {\n            size: 2,\n            count: 3\n        },\n        'PatrolBoat': {\n            size: 1,\n            count: 4\n        },\n    }\n    const ships = [];\n    function placeShip(coordinates) {\n        let newShip = Ship(coordinates);\n        ships.push(newShip);\n    }\n    function receiveAttack(hitLocation) {\n        ships.forEach((ship) => {\n            const foundHit = ship.position.find(val => val === hitLocation);\n            if(foundHit) {\n                ship.hit(hitLocation);\n                receivedShots.push(hitLocation)\n            } else missedShots.push(hitLocation);\n        })\n    }\n    function checkIfAllShipAreSunk() {\n        let allSunk = false;\n        for (let ship of ships) {\n            if (ship.isSunk()) {\n                allSunk = true;\n            } else {\n                allSunk = false;\n                return allSunk;\n            }\n        }\n        return allSunk;\n    }\n    return {\n        shipCount: shipCount,\n        placeShip: placeShip,\n        ships: ships,\n        missedShots: missedShots,\n        receivedShots: receivedShots,\n        receiveAttack: receiveAttack,\n        checkIfAllShipAreSunk: checkIfAllShipAreSunk,\n    }\n}\n\nmodule.exports = Gameboard;\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\nconst {Player, Computer} = __webpack_require__(/*! ./ai */ \"./src/ai.js\")\n;\n\n(0,_domManipulation__WEBPACK_IMPORTED_MODULE_0__.createGameboards)();\n\nconst player1 = Player('test');\nconst computer = Computer();\nlet shipSize = 0;\nlet shipName = '';\nlet shipCount = 0;\n\nconst acBtn = document.getElementById('AC');\nconst battleshipBtn = document.querySelector('#Battleship');\nconst lcBtn = document.querySelector('#LC');\nconst patrolBtn = document.querySelector('#PatrolBoat');\nconst allBtns = [acBtn, battleshipBtn, lcBtn, patrolBtn];\nallBtns.forEach(button => {\n    button.addEventListener('click', () => {\n        shipSize = player1.playerGB.shipCount[button.id].size;\n        shipName = button.id;\n        shipCount = player1.playerGB.shipCount[button.id].count;\n    })\n})\n\nconst letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];\n\nconst p1ShipsDiv = document.querySelector('#ships-p1');\nlet chosenCoordinates = [];\np1ShipsDiv.addEventListener('click', (e) => {\n    let shipId = e.target.dataset.shipId;\n    console.log(chosenCoordinates)\n    if(e.target.classList.contains('chosen') && chosenCoordinates.includes(shipId)) {\n        chosenCoordinates.splice(chosenCoordinates.indexOf(shipId), 1);\n        e.target.classList.toggle('chosen');\n    } else {\n        if (chosenCoordinates.length !== shipSize){\n            e.target.classList.add('chosen');\n            chosenCoordinates.push(shipId);\n        } else if (chosenCoordinates.length === shipSize) {\n            player1.playerGB.placeShip(chosenCoordinates);\n            chosenCoordinates = [];\n        }\n    }\n})\n\n// The gameboard for the player to choose which spaces to attack\nconst compShipsDiv = document.querySelector('#ships-p2');\ncomputer.computerGB.placeShip(['a1', 'a2', 'a3']);\ncomputer.computerGB.placeShip(['f8']);\ncompShipsDiv.addEventListener('click', (e) => {\n    computer.computerGB.receiveAttack(e.target.dataset.shipId);\n    if (computer.computerGB.receivedShots.includes(e.target.dataset.shipId)) {\n        e.target.classList.add('hit');\n    } else {\n        e.target.classList.add('miss');\n    }\n})\n\nfunction getRandomPosition(max) {\n    return Math.floor(Math.random() * max);\n}\n\n\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((module) => {

eval("const Ship = (position) => {\n    function hit (hitPos) {\n        position.splice(hitPos, 1, 'hit');\n    }\n    function isSunk () {\n        sunk = true;\n        position.forEach(val => {\n            if (val !== 'hit') sunk = false;\n        })\n        return sunk;\n    }\n    return {\n        hit: hit,\n        position: position,\n        isSunk: isSunk,\n    }\n}\n\n\nmodule.exports = Ship;\n\n\n\n\n\n\n\n//# sourceURL=webpack://battleships/./src/shipFactory.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;