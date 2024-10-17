
function getRandomInt() {
    const choices1 = ["rock", "paper", "scissors"];
    const randomChoice1 = choices1[Math.floor(Math.random() * choices1.length)];
    //console.log(randomChoice);  

    return String(randomChoice1);
}

function getRandomUser() {
    const choices2 = ["rock", "paper", "scissors"];
    const randomChoice2 = choices2[Math.floor(Math.random() * choices2.length)];
    //console.log(randomChoice);  

    return String(randomChoice2);
}
//print(randomChoice);
console.log("Hello World..!! Again");
console.log('Computers Choice :' + getRandomInt());
console.log('Users Choice :' + getRandomUser());

const computerChoice = getRandomInt();
const userChoice = getRandomUser();

if ((computerChoice) === (userChoice)) {
    console.log("Wow! It is Tight");
} else {
    console.log('We have got a winner.');
}



