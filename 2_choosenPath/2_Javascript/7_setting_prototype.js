//Setting a prototype hufanyika kwa njia nyingi
// ikiwemo  Object.create() and constructors



// Example 1 by Object.create()
const personPrototype = {
    greet() {
        console.log('Habari zenu');
    },
};

const carl = Object.create(personPrototype);
//carl.greet();

// Example 2 by constructor

const animalPrototype = {
    greet() {
        console.log(`Hehehe , mnyama wangu anaitwa ${this.name}`);
    },
};

function Animal(name) {
    this.name = name
}

Object.assign(Animal.prototype, animalPrototype);
// au
//Animal.prototype.greet = animalPrototype.greet;

const reuben = new Animal("Reuben");
reuben.greet(); // hello, my name is Reuben!


//It's common to see this pattern, in which methods are defined on the prototype, but data properties are defined in the constructor. 

//Object.hasOwn() hutumika kuangalia ikiwa ikiwa object inayo property hiyo

const irma = new Animal('Irma');
console.log(Object.hasOwn(irma, 'name'));
console.log(Object.hasOwn(irma, 'greet'));