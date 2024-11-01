const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid
myObject.toString(); // "[object Object]"



// What are these extra properties, and where do they come from?

// Every object in JavaScript has a built-in property,
//which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain.
Object.getPrototypeOf(myObject); // Object { }


