const myLibrary = [];
//Book

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
    this.basicInfo = function () {
        // console.log
        console.log(
            ` Book Information:
            author : ${this.author}
            title  : ${this.title}
            pages: ${this.pages}
            readStatus: ${this.readStatus}
            `
        );

    };



};
Book.prototype.isbn;
Book.prototype.genre;
Book.prototype.pub_date;
Book.prototype.language;

Book.prototype.otherInfo = function (isbn, genre, pub_date, language) {
    this.isbn = isbn;
    this.genre = genre;
    this.pub_date = pub_date;
    this.language = language;
    // console.log
    console.log(
        `  
            isbn: ${this.isbn}
            genre: ${this.genre}
            pub_date : ${this.pub_date}
            language: ${this.language}
            `
    );


};  //author, title, pages, readStatus, isbn,genre,pub_date,language

const book1 = new Book('Abuu', 'PythonForDummies', 30, 'tayari');
const book2 = new Book('Asha', 'DatabaseSystem', 34, 'bado');
const book3 = new Book('Ali', 'ReactSafari', 36, 'tayari');
const book4 = new Book('Adam', 'GeonodeHands-on', 20, 'bado');


book1.basicInfo();
book1.otherInfo('566677', 'Coding', '21/04/2023', 'Swahili');
book2.basicInfo();
book2.otherInfo('895435', 'Data', '02/03/2023', 'English');
book3.basicInfo();
book3.otherInfo('124356', 'FrontEnd', '09/10/2022', 'Kipemba');
book4.basicInfo();
book4.otherInfo('700645', 'Spatial', '12/02/2022', 'Kimakunduchi');

//check

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);

//console.log(myLibrary);

// for (let key in myLibrary) {
//     console.log(key, myLibrary[key]);
// }
let text;
for (let i = 0; i < myLibrary.length; i++) {
    text += myLibrary[i] + " ";
}
