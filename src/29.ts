class ExampleClass {
  constructor(name: string) {
    this.name = name;
    console.log(`Hello, I am ${this.name}`);
  }

  sayHello() {
    console.log("Hello!");
  }
}

// Main function to run the code in your IDE or file system
const exampleClass = new ExampleClass('World');
exampleClass.sayHello();
