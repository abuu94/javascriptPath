function Player(jina, kete) {
    this.jina = jina;
    this.kete = kete;

    this.sayName = function () {
        console.log(` Mm ni : ${this.jina}`)
    };
}

const player1 = new Player('Ali', 'X');
const player2 = new Player('Adam', 'Y');

console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // returns true


//if result is true that the original object
// inherits from, and has access to all of its
//prototype’s methods and properties.


//
// Don't do this!  ni njia ya zamani sikuizi haitumiki
player1.__proto__ === Player.prototype; // returns true
player2.__proto__ === Player.prototype; // returns true
