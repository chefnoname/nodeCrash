console.log(__dirname, 'this is the dir name');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  salaam() {
    console.log(
      `assalamu alaykum my name is ${this.name} and i am ${this.age}`
    );
  }
}

module.exports = Person;
