// CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(baseAtts) {
        this.name = baseAtts.name,
            this.age = baseAtts.age,
            this.location = baseAtts.location
    };
    speak() {
        console.log (`Hello, my name is ${this.name}, I am from ${this.location}!`)
    };
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instructAtts) {
        super(instructAtts);
        this.specialty = instructAtts.specialty,
        this.favLanguage = instructAtts.favLanguage,
        this.catchPhrase = instructAtts.catchPhrase
    };
    demo(subject) {
        console.log (`Today we are learning about ${subject}!`)
    }
    grade(student, subject) {
        console.log (`${student} recieves a perfect score on ${subject}!`)
    }
}


// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(studAtts) {
        super(studAtts);
        this.previousBackground = studAtts.previousBackground,
            this.className = studAtts.className,
            this.favSubject = studAtts.favSubject
    }
    listsSubjects() {
        console.log(`My favorite subjects are ${this.favSubject}.`)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted for a PR for ${subject}.`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor {
    constructor(pmAtts) {
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName,
            this.favInstructor = pmAtts.favInstructor
    }
    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
       console.log(`${this.name} debugs ${student}'s code in ${subject}.`)

    }
}

const Ingrid = new Instructor({
    name: 'Ingrid',
    age: 54,
    location: 'Iceland',
    specialty: 'C++',
    favLanguage: 'C#',
    catchPhrase: 'Awe boolean.'

})

const Issac = new Instructor({
    name: 'Issac',
    age: 24,
    location: 'Romania',
    specialty: 'Project Management',
    favLanguage: 'HTML',
    catchPhrase: 'In Romania, we have the best soup!'

})

const Ira = new Instructor({
    name: 'Ira',
    age: 38,
    location: 'NYC',
    specialty: 'Front End Design',
    favLanguage: 'ReAct',
    catchPhrase: 'This life... American'

})

Issac.speak();
Ingrid.speak();
Ira.speak();
Ira.demo('food');
Ingrid.grade('Madison', 'Art');


const Patrick = new ProjectManagers({
    name: 'Patrick',
    age: 33,
    location: 'Minnesota',
    gradClassName: 'WebDev',
    favInstructor: 'Snape',
    specialty: 'flexbox',
    favLanguage: 'JavaScript',
    catchPhrase: 'Not my bagonias!'

})

const Petra = new ProjectManagers({
    name: 'Petra',
    age: 49,
    location: 'Georgia',
    gradClassName: 'the Ducks',
    favInstructor: 'Charlie Day',
    specialty: 'Hacking the Mainframe',
    favLanguage: 'CSS',
    catchPhrase: 'CSS.. more like ya momma!'

})

const Peter = new ProjectManagers({
    name: 'Peter',
    age: 17,
    location: 'Gore',
    gradClassName: 'Anonymous Knitting Club',
    favInstructor: 'Harley',
    specialty: 'Aestetics',
    favLanguage: 'HTML',
    catchPhrase: 'No sleep till.. oh its 8pm time for bed'

})

Petra.standUp('Web23');
Peter.demo('Career Readiness');
Patrick.speak();
Peter.debugsCode('Ashley','CSS');

const Sally = new Student({
    name: 'Sally',
    age: 28,
    location: 'Utah',
    previousBackground: 'Mechanic',
    className: 'Web Dev',
    favSubject: ['CSS', 'JavaScript', 'Math']

})

const Sasha = new Student({
    name: 'Sasha',
    age: 38,
    location: 'SoCal',
    previousBackground: 'Barista',
    className: 'UX/UI Design',
    favSubject: ['Asteral Projection', 'Wiffleball', 'Blackjack']

})

const Sarah = new Student({
    name: 'Sarah',
    age: 65,
    location: 'Navada',
    previousBackground: 'Classified',
    className: 'Android Applications',
    favSubject: ['Node.js', 'DOM Manipulation', 'Pottery']

})
Sarah.speak();
Sasha.PRAssignment('UX/UI');
Sally.sprintChallenge('Advanced CSS');
Sally.listsSubjects();