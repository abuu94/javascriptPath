

function Player(jina, kete) {
    this.jina = jina;
    this.kete = kete;

    this.sayName = function () {
        console.log(` Mm ni : ${this.jina}`)
    };
}

const player1 = new Player('Ali', 'X');
const player2 = new Player('Adam', 'Y');

player1.sayName();
player2.sayName();

//Accessing an object’s prototype
Player.prototype.sayHello = function () {
    console.log(`Mambo Vipi, I am player ${this.jina}`);
};

//Similarly, you can attach other properties or 
//functions you want to use on all Player objects 
//by defining them
// on the objects’ prototype (Player.prototype).

player1.sayHello();
player2.sayHello();


Player.prototype.tellSalam = function () {
    console.log(`Mm ${this.jina} kutoka Tanzania`);
};

player1.tellSalam();
player2.tellSalam();

Player.prototype.age = 30;
Player.prototype.address = 'Tanzania';
Player.prototype.team = 'Zanzibbar Heroes';

Player.prototype.detail = function () {
    console.log(`
        Jina langu ni ${this.jina} 
        Naishi ${this.address}
        Umri wangu ni ${this.age}
        Team yangu ni ${this.team}
        
        `);
};
// player1.age = 12;
// player2.age = 15;

// console.log(`Umri wa ${this.player1.jina}  ni ${this.player1.age}`);
// console.log(`Umri wa ${this.player1.jina} ni ${this.player2.age}`);

player1.detail();
player2.detail();