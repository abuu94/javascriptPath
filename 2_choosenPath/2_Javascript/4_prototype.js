// The prototype is another object that the original object inherits from, which is to say, the original object has access to
//  all of its prototype’s methods and properties.
// Accessing an object’s prototype.



// example two
// const playerOne = {
//     name: "tim",
//     marker: "X"
// };

// const playerTwo = {
//     name: "jenn",
//     marker: "O"
// };

// function printName() {
//     console.log(playerOne);
//     console.log(playerTwo);

// }

// printName()


// function gameOver(winningPlayer) {
//     console.log("Congratulations!");
//     console.log(playerOne.name + " is the winner!");
// }

// gameOver()




function Player(jina, kete) {
    this.jina = jina;
    this.kete = kete;

    this.sayName = function () {
        console.log(this.jina)
    };
}

const player1 = new Player('Ali', 'X');
const player2 = new Player('Adam', 'Y');

// player1.sayName();
// player2.sayName();



Object.getPrototypeOf(player1) === Player.prototype; // returns true

Object.getPrototypeOf(player2) === Player.prototype; // returns true