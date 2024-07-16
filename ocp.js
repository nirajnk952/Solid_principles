//open for extension but closed for modification.

//p.s -:   system where different animals can communicate their sounds. 
// The system should allow adding new animal 
//types in the future without modifying existing code.


// Interface for communication
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

// Example 
const dog = new Dog();
const duck = new Duck();

const communicator = new Communication();

console.log(communicator.communicate(dog)); 
console.log(communicator.communicate(duck)); 


