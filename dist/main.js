/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Bullet{\n    constructor(x, y){\n        this.mouse = [x, y];\n        this.canvas = document.getElementById('game-canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.point = window.innerWidth;\n    }\n\n    draw() {\n        this.bulletPath();\n\n    }\n\n    bulletPath() {\n        this.ctx.beginPath();\n        let point = (this.point / 2);\n        let endx = this.mouse[0];\n        let endy = this.mouse[1];\n        this.ctx.moveTo(point, window.innerHeight);\n        this.ctx.lineTo(endx, endy);\n        this.ctx.lineWidth = 10;\n        this.ctx.strokeStyle = '#FF00FF';\n        this.ctx.stroke();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/enemies.js":
/*!************************!*\
  !*** ./src/enemies.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Enemy {\n    constructor(game) {\n        this.game = game;\n        this.pos = [0, 500];\n        this.img = new Image();\n        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580246306/tile003_pgcjmz.png';\n        this.destroyed = false;\n        this.canvas = document.getElementById('game-canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.size = [70, 70];\n        this.damage = 20;\n        this.starting = true;\n    }\n\n    draw() {\n        this.ctx.drawImage(this.img, this.pos[0], this.pos[1], this.size[0], this.size[1])\n    }\n\n    shootEnemy(x, y) {\n        if (x > this.pos[0] - (this.size[0]/1.75) && x <= this.pos[0] + (this.size[0]/1.75)) {\n            if (y > this.pos[1] - (this.size[1]/1.75) && y <= this.pos[0] + (this.size[0]/1.75)) {\n                if (!this.destroyed) {\n                    this.game.killedEnemies += 1;\n                }\n                this.destroy();\n            }\n        }\n    }\n\n    destroy() {\n        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580322609/tile014_smzvv7.png';\n        this.destroyed = true;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);\n\n\n\n//# sourceURL=webpack:///./src/enemies.js?");

/***/ }),

/***/ "./src/flying_enemies.js":
/*!*******************************!*\
  !*** ./src/flying_enemies.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemies */ \"./src/enemies.js\");\n\n\nclass FlyingEnemy extends _enemies__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(game){\n        super(game);\n        this.pos = [0, 200];\n        this.img = new Image();\n        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580408046/ezgif.com-crop_akgdpb.gif';\n        this.size = [100, 100];\n        this.damage = 50;\n        this.up = true;\n    }\n\n    destroy() {\n        this.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580410322/ezgif.com-crop_1_rouon0.gif';\n        this.destroyed = true;\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlyingEnemy);\n\n//# sourceURL=webpack:///./src/flying_enemies.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemies */ \"./src/enemies.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n/* harmony import */ var _flying_enemies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flying_enemies */ \"./src/flying_enemies.js\");\n\n\n\n\nclass Game {\n    constructor(canvas){\n        this.canvas = canvas;\n        canvas.width = 1200;\n        canvas.height = 700;\n        this.ctx = this.canvas.getContext(\"2d\");\n        this.ctx.fillStyle = \"lightgreen\";\n        this.ctx.font = \"50px Comic Sans MS\";\n        this.enemies = [new _enemies__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this)];\n        this.flyingEnemies = [];\n        this.killedEnemies = 0;\n        this.health = 1000;\n        this.score = 0;\n        this.difficulty = 1000;\n\n        this.createEnemy = setInterval(() => {\n            let n = Math.random();\n            if (n > 0.7) {\n                this.enemies.push(new _enemies__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this))\n            }\n        }, this.difficulty)\n\n        setTimeout(this.createFlyingEnemy = setInterval(() => {\n            let n = Math.random();\n            if (n > 0.9) {\n                this.flyingEnemies.push(new _flying_enemies__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this))\n            }\n        }, this.difficulty), 100)\n    }\n\n    drawEnemies(){\n        this.enemies.map( enemy => {\n            if (!(enemy instanceof _flying_enemies__WEBPACK_IMPORTED_MODULE_2__[\"default\"])) {\n                if (enemy.destroyed) {\n                    this.killedEnemies += 1;\n                    this.difficulty = this.difficulty - (this.killedEnemies * 2);\n                    console.log(this.difficulty);\n                    this.score += enemy.damage;\n                    enemy.draw();\n                    setTimeout(this.enemies.splice(this.enemies.indexOf(enemy), 1), 2000);\n                } else {\n                    enemy.draw();\n                    enemy.pos[0] += 10;\n                }\n\n                enemy.pos[1] -= 5;\n                if (enemy.pos[1] < 500) {\n                    enemy.pos[1] += 10\n                }\n            }\n        });\n\n        this.flyingEnemies.map( flyingEnemy => {\n            if (flyingEnemy.destroyed) {\n                this.killedEnemies += 1;\n                this.difficulty = this.difficulty - (this.killedEnemies * 2);\n                this.score += flyingEnemy.damage;\n                flyingEnemy.draw();\n                setTimeout(this.flyingEnemies.splice(this.flyingEnemies.indexOf(flyingEnemy), 1), 3000);\n            } else {\n                if (flyingEnemy.up) {\n                    flyingEnemy.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580408046/ezgif.com-crop_akgdpb.gif';\n                    flyingEnemy.up = false;\n                    flyingEnemy.draw();\n                    flyingEnemy.pos[0] += 10;\n                } else {\n                    flyingEnemy.img.src = 'https://res.cloudinary.com/justinlf55/image/upload/v1580408870/ezgif.com-crop_bikubg.gif';\n                    flyingEnemy.up = true;\n                    flyingEnemy.draw();\n                    flyingEnemy.pos[0] += 10;\n                }\n            }\n\n            if (flyingEnemy.pos[1] < 200) {\n                flyingEnemy.pos[1] += 40;\n            } else {\n                flyingEnemy.pos[1] -= 40;\n            }\n\n        });\n    }\n\n    move(ctx){\n        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        if (this.health < 500 && this.health > 250) {\n            this.ctx.fillStyle = \"orange\";\n        } else if(this.health < 250) {\n            this.ctx.fillStyle = \"red\";\n        }\n        ctx.fillText(`HP:${this.health}/1000`, 50, 50);\n        ctx.fillText(`Score:${this.score}`, 100, 100);\n        this.drawEnemies();\n    } \n\n    HP() {\n        let enemies = this.enemies.concat(this.flyingEnemies);\n        enemies.forEach(enemy => {\n            if (enemy.pos[0] >= 1200) {\n                this.health -= enemy.damage;\n                this.enemies.splice(this.enemies.indexOf(enemy), 1);\n            }\n        })\n\n        if (this.health < 10) {\n            alert('You lose');\n        }else{\n            setTimeout(() => this.HP(), 3000);\n        }\n    }\n\n    start(){\n        let ctx = this.ctx;\n        setInterval(() => {\n            this.move(ctx) },\n            this.difficulty - 500\n        )\n    }\n\n    \n    play() {\n        let enemies = this.enemies;\n        document.getElementById('game-canvas').addEventListener('click', e => {\n            let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.clientX, e.clientY);\n            bullet.draw();\n            enemies.forEach(enemy => {\n                enemy.shootEnemy(bullet.mouse[0], bullet.mouse[1]);\n            })\n        }, false);\n\n        let flyingEnemies = this.flyingEnemies;\n        document.getElementById('game-canvas').addEventListener('click', e => {\n            let bullet = new _bullet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](e.clientX, e.clientY);\n            bullet.draw();\n            flyingEnemies.forEach(flyingEnemy => {\n                flyingEnemy.shootEnemy(bullet.mouse[0], bullet.mouse[1]);\n            })\n        }, false);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  game.start();\n  game.play();\n  game.HP();\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });