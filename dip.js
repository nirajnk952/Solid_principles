//High level modules should not depend on low level -modules.
//both should depnd pn abstraction

//classes shouldnt depend on interfaces rather than concrete class

//p.s- : system that allows various types of keyboards to connect 
//to different models of laptops.

// Abstraction (Interface)
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

//now Concrete Implementation
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

// exmple  high-level module
const myMechanicalKeyboard = new MechanicalKeyboard();
const myMacBook = new AppleMacBook();

myMacBook.connectKeyboard(myMechanicalKeyboard);  
