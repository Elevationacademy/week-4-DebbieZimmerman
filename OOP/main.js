// //spot check 1
// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }
//     giveBirth(name){
//         this.children.push(name)
//         console.log("Boom. Birthed " + this.children[this.children.length - 1])
//     }
// }
// const dog = new Animal("River", 4)
// console.log(dog.name)
// dog.giveBirth("Puppy")
// dog.giveBirth('Annie')


//spot check 2
// class Human {
//     constructor(name, age, isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
//     printHuman() {
//         if (this.isFriendly) {
//             console.log(`${this.name} is ${this.age} and is friendly.`)
//         } else {
//             console.log(`${this.name} is ${this.age} and is not friendly.`)
//         }
//     }

// }

// const Debbie = new Human("Debbie", "38", true)
// Debbie.printHuman()

//spot check 4
// class Vehicle {
//     constructor(x, y, fuel, speed) {
//     this.x = x
//     this.y = y
//     this._fuel = fuel
//     this._speed = speed
//     Vehicle.carsSold++
//     }
//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
//     get speed(){
//         return this._speed
//     }
//     set fuel(fuel) {
//         if (fuel < 0) { return console.log('Not enough fuel') }
//         if (fuel > 150) { return console.log('Too much fuel') }
//         this._fuel = fuel
//     }

//     get fuel() {
//         return this._fuel
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney = () => 
//         console.log(`Made ${Vehicle.carsSold * 30000} dollars`)
// }

// Vehicle.carsSold = 0

// const firebird = new Vehicle(60, 60, 60) 
// const sienna = new Vehicle (60, 60, 60)
// Vehicle.getInfo()
// Vehicle.calculateMoney()
// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.speed) // prints undefined
// c.speed = 10
// console.log(c.speed)
// c.fuel = 160
// console.log(c.fuel)
// c.fuel = -3
// console.log(c.fuel)
// c.fuel = 120
// console.log(c.fuel)

//Inheritance
//spot check 1
class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    //method overriding!
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(null, startYear, null)
        this.salary = salary
        this.name = "Professor " + name
        this.courses = {}
    }
    giveGrade(student, course, grade) {
        student.receiveGrade(course, grade)
    }
    addCourse(course) {
        if(this.courses[course]){
            return this.courses[course]++
        }
        this.courses[course] = 1
    }
}

class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}

// exercise
class Principal extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.teachers = []
        this.students = []

    }
    hireTeacher(teacher){
        this.teachers.push(teacher)
        console.log(`${this.name} just hired ${teacher.name}`)
    }
    recruitStudent(student){
        this.students.push(student)
    }
    expelStudent(student){
        for (let i in this.students) {
            if (this.students[i].name === student.name) {
                return this.students.splice(i, 1)
            }
        }
    }
    transferStudent(student, principal){
        principal.students.push(student)
        this.expelStudent(student)
    }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron


