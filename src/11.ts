class MyClass {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello(): string {
    return `Hello, my name is ${this.name}`;
  }
}

export default MyClass;
