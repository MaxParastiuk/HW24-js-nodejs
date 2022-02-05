const person = require('./pesron');

class Teacher extends person.Person {
  constructor(name,age,gender,interests,subject) {
    super(name,age,gender,interests);
    this.subject = subject;
  }
  aboutMe () {
    console.log(`Hi.I am Teacher. My name is ${this.name}. I teach ${this.subject}.  I am  ${this.age}. My interests are ${this.interests}.`)
  }
}

exports.Teacher = Teacher;

