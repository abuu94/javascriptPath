
const myLibrary = [];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
    // let title = prompt("Enter the book title:");
    // let author = prompt("Enter the book author:");
    // let year = prompt("Enter the book publication year:");

    let title = 'Kilio chetu';
    let author = 'Adam';
    let year = 2024;

    // Create a new book object
    let newBook = {
        title: title,
        author: author,
        year: year
    };

    // Add the new book to the array
    myLibrary.push(newBook);
    console.log("Book added successfully!");
}
addBookToLibrary();
console.log(myLibrary);

//0710573343