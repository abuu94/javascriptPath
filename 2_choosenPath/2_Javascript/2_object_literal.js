//Objects as a design pattern

// example two
const playerOne = {
    name: "tim",
    marker: "X"
};

const playerTwo = {
    name: "jenn",
    marker: "O"
};

function printName() {
    // console.log(playerOne.name);
    // console.log(playerTwo.name);
    console.log(playerOne);
    console.log(playerTwo);

}

printName()


// console.log(playerOne);
// console.log(playerTwo);

function gameOver(winningPlayer) {
    console.log("Congratulations!");
    console.log(playerOne.name + " is the winner!");
}

gameOver()


//Mapungufu yaliyomo ktk Objects as a design pattern imepelekea kuja na Object constructor

