const student = require("./People/student")
const teacher = require("./People/teacher")

let student1 = new student.Student("Nick",14,"Male","Music, football")
let teacher1 = new teacher.Teacher('Tom',29,'Male','Math','Math and Physics')

student1.aboutMe();
teacher1.aboutMe();