//no code should be forced to depend on methods it does not use. 
//ISP splits interfaces that are very large into smaller and more specific ones so 
//that clients will only have to know about the methods that are of interest to them.

//p.s :- system for managing different types of printing and scanning devices.
//  The system should support both simple printers (which only print documents) and 
//  multi-function printers (which can both print and scan documents). 

// Define small, specific interfaces using classes
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

// Multi - FUNCTN device that implements both interfaces
class MultiFunctionPrinter extends Printer {
    printDocument(document) {
        console.log('Printing document:', document);
    }

    scanDocument(document) {
        console.log('Scanning document:', document);
    }
}

// Simple printer that implments only the printing interface
class SimplePrinter extends Printer {
    printDocument(document) {
        console.log('Printing document:', document);
    }
}

// Example 

const document = "Sample Document";
const multiFunctionPrinter = new MultiFunctionPrinter();
const simplePrinter = new SimplePrinter();

multiFunctionPrinter.printDocument(document);
multiFunctionPrinter.scanDocument(document);
simplePrinter.printDocument(document);
