
//This file explain each of the SOLID principles with different classes and examples. 

// SRP - Single Responsibility Principle
class BlogPost {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }

    getData() {
        return {
            author: this.author,
            title: this.title,
        };
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }
}

class JsonBlogPostPrinter {
    print(blogPost) {
        return JSON.stringify(blogPost.getData());
    }
}

// OCP - Open/Closed Principle
class Comunicatable {
    speak() {
        throw new Error("This method must be overridden");
    }
}

class Dog extends Comunicatable {
    speak() {
        return 'bark bark';
    }
}

class Duck extends Comunicatable {
    speak() {
        return 'quack quack';
    }
}

class Communication {
    communicate(animal) {
        if (animal instanceof Comunicatable) {
            return animal.speak();
        } else {
            throw new Error("Animal must implement Comunicatable interface");
        }
    }
}

// LSP - Liskov Substitution Principle
class Bird {
    fly() {
        console.log("Bird is flying");
    }
}

class DuckLSP extends Bird {
    swim() {
        console.log("Duck is swimming");
    }
}

class Penguin extends Bird {
    swim() {
        console.log("Penguin is swimming");
    }

    fly() {
        console.log("Penguins cannot fly");
    }
}

// ISP - Interface Segregation Principle
class Printer {
    printDocument(document) {
        throw new Error('Method not implemented');
    }
}

class Scanner {
    scanDocument(document) {
        throw new Error('Method not implemented');
    }
}

class MultiFunctionPrinter extends Printer {
    printDocument(document) {
        console.log('Printing document:', document);
    }

    scanDocument(document) {
        console.log('Scanning document:', document);
    }
}

class SimplePrinter extends Printer {
    printDocument(document) {
        console.log('Printing document:', document);
    }
}

// DIP - Dependency Inversion Principle
class Keyboard {
    connect() {
        throw new Error("This method must be overridden");
    }
}

class MacBook {
    connectKeyboard(keyboard) {
        throw new Error("This method must be overridden");
    }
}

class MechanicalKeyboard extends Keyboard {
    connect() {
        console.log("Mechanical keyboard connected.");
    }
}

class AppleMacBook extends MacBook {
    connectKeyboard(keyboard) {
        if (!(keyboard instanceof Keyboard)) {
            throw new Error("Invalid keyboard type.");
        }
        keyboard.connect();
        console.log("Keyboard connected to MacBook.");
    }
}

// Examples of all solid principle tht i have applied

// SRP Example
const author = "Niraj";
const title = "Title for blog post";
const blogPost = new BlogPost(author, title);
const jsonPrinter = new JsonBlogPostPrinter();
console.log(jsonPrinter.print(blogPost));

// OCP Example
const dog = new Dog();
const duck = new Duck();
const communicator = new Communication();
console.log(communicator.communicate(dog));
console.log(communicator.communicate(duck));

// LSP Example
const duckLSP = new DuckLSP();
const penguin = new Penguin();
duckLSP.fly();
duckLSP.swim();
penguin.fly();
penguin.swim();

// ISP Example
const document = "Sample Document";
const multiFunctionPrinter = new MultiFunctionPrinter();
const simplePrinter = new SimplePrinter();
multiFunctionPrinter.printDocument(document);
multiFunctionPrinter.scanDocument(document);
simplePrinter.printDocument(document);

// DIP Example
const myMechanicalKeyboard = new MechanicalKeyboard();
const myMacBook = new AppleMacBook();
myMacBook.connectKeyboard(myMechanicalKeyboard);
