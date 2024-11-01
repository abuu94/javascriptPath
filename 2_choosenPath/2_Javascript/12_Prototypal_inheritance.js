//Prototypal inheritance
//In recap, we can say that the player1 and player2 objects inherit from the Player.prototype object, which allows them to access functions like .sayHello.

function Player(jina, kete) {
    this.jina = jina;
    this.kete = kete;

    this.sayName = function () {
        console.log(` Mm ni : ${this.jina}`)
    };
}

const player1 = new Player('Ali', 'X');
const player2 = new Player('Adam', 'Y');

// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);
// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
console.log(player1.valueOf());


console.log(player1.hasOwnProperty('valueOf')); // false
console.log(Object.prototype.hasOwnProperty('valueOf')); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));//true