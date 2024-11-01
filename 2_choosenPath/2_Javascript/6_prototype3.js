const myDate = new Date(1995, 11, 17);
let object = myDate;

// do {
//     object = Object.getPrototypeOf(object);
//     console.log(object);
// } while (object);

// Date.prototype
// Object { }
// null


//const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
    console.log("something else!");
};

myDate.getTime(); // 'something else!'