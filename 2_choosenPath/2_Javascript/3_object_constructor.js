//Object constructor

function Player(jina, kete) {
    this.jina = jina;
    this.kete = kete;

    this.sayName = function () {
        console.log(this.jina)
    };
}

const player1 = new Player('Ali', 'X');
const player2 = new Player('Adam', 'Y');

player1.sayName();
player2.sayName();

//Exercise : Tengeneza Box Constructor
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.info = function () {
        // console.log(title + ' by ' + author + ' , ' +
        //     pages + ' pages ' + readStatus);
        return (title + ' by ' + author + ' , ' +
            pages + ' pages ' + readStatus);
    };

}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');


console.log(theHobbit.info());