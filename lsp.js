//if class B is a subclass of class A, then objects of type A should be replaceable 
//with objects of type B without affecting the functionality or correctness of the program.

//Child classes should be able to replace parent classes without causing errors or unexpected behavior.


//ps -: a class hierarchy for various types of birds, ensuring that each bird's unique
 //behaviors  like flying nd swimming are accurately represented. The design should 
 //adhere to the Liskov Substitution Principle (LSP) to maintain the integrity
 // and substitutability of the bird objects.

class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Duck extends Bird {
  swim() {
    console.log("Duck is swimming");
  }
}

// New subclass that adheres to LSP
class Penguin extends Bird {
  swim() {
    console.log("Penguin is swimming");
  }
  
  // Penguin cant fly - so overriding fly methd to reflect tht
  fly() {
    console.log("Penguins cannot fly");
  }
}

// EXAMPLE
const duck = new Duck();
const penguin = new Penguin();

duck.fly(); 
duck.swim(); 

penguin.fly(); 
penguin.swim(); 