const person = require('./pesron');

class Student extends person.Person {
  aboutMe () {
    console.log(`Hi.I am student. My name is ${this.name}. I am  ${this.name}. My interests are ${this.interests}`)
  }
}

exports.Student = Student