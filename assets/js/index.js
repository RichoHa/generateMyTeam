const inquirer = require("../_tests_/node_modules/inquirer/lib/inquirer");
const fs = require('fs');

let myTeam = [];

//TESTS function

function testName(name){
    if(name === ``){
        return `(Please enter a valid name)`
    } else if (/\d/.test(name)){
        return `(Please enter a valid name)`
    } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(name)){
        return `(Please enter a valid name)`
    }else{
        return true;
    }
}

function testID(id){
    if(id === ``){
        return `(Please enter a valid id)`
    // } else if (id in myTeam){
        // return `(id is used, use another number)`
    } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(id)){
        return `(Please enter a valid id)`
    } else if (/[a-z]/i.test(id)){
        return `(Please enter a valid id)`
    }else{
        return true;
    }
}

function testEmail(email){
    if(email === ``){
        return `(Please enter a valid email)`
    // } else if (id in myTeam){
        // return `(id is used, use another email)`
    } 
    if (/\S+@\S+\.\S+/.test(email)){
        return true;
    } else{
        return `(Please enter a valid email)`
    }
}


function testOffice(Office){
    if(Office === ``){
        return `(Please enter a valid office number)`
    // } else if (id in myTeam){
        // return `(id is used, use another number)`
    } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(Office)){
        return `(Please enter a valid office number)`
    } else if (/[a-z]/i.test(Office)){
        return `(Please enter a valid office number)`
    }else{
        return true;
    }
}

//Questions Regarding Manager
async function myManagerFunction(){

    const myManager = [
        {
            type: 'input',
            message: 'What is the name of your manager?',
            name: 'nameManager',
            validate: (nameManager) => {
                return testName(nameManager);
            }
        },
        {
            type: 'input',
            message: 'What is the id of your manager?',
            name: 'idManager',
            validate: (idManager) => {
                return testID(idManager);
            }
        },
        {
            type: 'input',
            message: 'What is the email of your manager?',
            name: 'emailManager',
            validate: (emailManager) => {
                return testEmail(emailManager);
            }
        },
        {
            type: 'input',
            message: 'What is the office number of your manager?',
            name: 'officeManager',
            validate: (officeManager) => {
                return testOffice(officeManager);
            }
        }
    ]
    const response = await inquirer.prompt(myManager);
    const Manager = new Employee(
        reponse.nameManager,
        reponse.idManager,
        reponse.emailManager,
        reponse.officeManager,
    );
    myTeam.push(addedManager);
}

//Questions Regarding Engineer
async function myEngineerFunction(){

    const myEngineer = [
        {
            type: 'input',
            message: 'What is the name of your engineer?',
            name: 'nameEngineer',
            validate: (nameEngineer) => {
                return testName(nameEngineer);
            }
        },
        {
            type: 'input',
            message: 'What is the id of your engineer?',
            name: 'idEngineer',
            validate: (idEngineer) => {
                return testID(idEngineer);
            }
        },
        {
            type: 'input',
            message: 'What is the email of your engineer?',
            name: 'emailEngineer',
            validate: (emailEngineer) => {
                return testEmail(emailEngineer);
            }
        },
        {
            type: 'input',
            message: 'What is the github user name of your engineer?',
            name: 'github',
            validate: (github) => {
                return testOffice(github);
            }
        }
    ]
    const response = await inquirer.prompt(myEngineer);
    const Engineer = new Employee(
        reponse.nameEngineer,
        reponse.idEngineer,
        reponse.emailEngineer,
        reponse.github,
    );
    myTeam.push(Engineer);
}

//Questions Regarding Engineer
async function myInternFunction(){

    const myIntern = [
        {
            type: 'input',
            message: 'What is the name of your Intern?',
            name: 'nameIntern',
            validate: (nameIntern) => {
                return testName(nameIntern);
            }
        },
        {
            type: 'input',
            message: 'What is the id of your Intern?',
            name: 'idIntern',
            validate: (idIntern) => {
                return testID(idIntern);
            }
        },
        {
            type: 'input',
            message: 'What is the email of your Intern?',
            name: 'emailIntern',
            validate: (emailIntern) => {
                return testEmail(emailIntern);
            }
        },
        {
            type: 'input',
            message: 'What school did your intern go to?',
            name: 'github',
            validate: (github) => {
                return testOffice(github);
            }
        }
    ]
    const response = await inquirer.prompt(myEngineer);
    const Engineer = new Employee(
        reponse.nameEngineer,
        reponse.idEngineer,
        reponse.emailEngineer,
        reponse.github,
    );
    myTeam.push(Engineer);
}

// class Manager extends Employee{
//     constructor(name, id, email, role, officeNumber) {
//         this.officeNumber = officeNumber;
//     }
//     getRole(){}
// }

// const shape = new Employee();

// shape.getName();

class Employee{
    constructor(name, id, email, role){
        this.name= name;
        this.id=id;
        this.email=email;
        this.role=role;
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
    getRole() {
      return 'Manager';
    }
}


class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      super(name, id, email);
      this.gitHub = gitHub;
    }
    getRole() {
      return 'Engineer';
    }
}


class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
    getRole() {
      return 'Intern';
    }
}



//Export the test functions
module.exports = {
    testName,
    testID,
    testEmail,
    testOffice
}





// class Engineer extends Employee{
//     constructor(name, id, email, role, gitHub){
//         this.gitHub = gitHub
//     }
//     getgitHub(){}
//     getRole(){}
//     //getRole()—overridden to return 'Engineer'
// }

// class Intern extends Employee{
//     constructor(name, id, email, role, school){
//         this.school = school
//     }
//     getSchool(){}
//     getRole(){}
//     //getRole()—overridden to return 'Intern'
// }

// module.exports = {Employee, Manager, Engineer, Intern};