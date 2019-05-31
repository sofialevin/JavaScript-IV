// CODE here for your Lambda Classes

// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
    setGrade(student) {
        if (Math.random() < 0.5) {
            student.grade = student.grade + (Math.floor(Math.random() * Math.floor(5)));
        } else {
            student.grade = student.grade - (Math.floor(Math.random() * Math.floor(5)));
        }
        console.log(student.grade);
    } 
}

// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}

class Student extends Person{
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(item) {
          console.log(item);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
    graduate() {
        if (this.grade >= 70) {
            console.log(`${this.name} graduates!`)
        } else {
            console.log(`${this.name} needs to study a little bit more.`)
        }
    }
}

// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following unique props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManagers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManagers extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const dan = new Instructor({
    name: 'Dan',
    age:  '35',
    location: 'Colorado',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'The cult of functionality.'
  })

const sofia = new Student({
    name: 'Sofia',
    age: 32,
    location: 'Oakland, CA',
    previousBackground: 'Customer Support',
    className: 'Javascript IV',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 80
})

const steve = new ProjectManagers({
    name: 'Steve',
    age: 34,
    location: 'Texas',
    gradClassName: 'Web5',
    favInstructor: 'Dan'
})


dan.demo('Javascript');
dan.grade(sofia, 'Javascript');
sofia.listsSubjects();
sofia.PRAssignment('Javascript');
sofia.sprintChallenge('Javascript');
steve.standUp('webPT7');
steve.debugsCode(sofia, 'Javascript');
dan.setGrade(sofia);
sofia.graduate();

