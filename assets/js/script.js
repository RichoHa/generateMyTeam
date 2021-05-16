const inquirer = require("../_tests_/node_modules/inquirer/lib/inquirer");
const fs = require('fs');

function testName(name) {
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

// const myManager = [
//     {
//         type: 'input',
//         message: 'What is the name of your manager?',
//         name: 'nameManager',
//         validate: (nameManager) => {
//             return testName(nameManager);
//         }
//     }
// ]

// function getManager(){
//     inquirer.prompt(myManager)
//     .then(response => {
//         console.log(`success`)
//     })
// }

// getManager();

module.exports = testName;

// const myManager = [
//     {
//         type: 'input',
//         message: 'What is the name of your manager?',
//         name: 'nameManager',
//         validate: (nameManager) => {
//             if(nameManager === ``){
//                 console.log(`(Please ensure a name is typed in.)`)
//             } else if (/\d/.test(nameManager)){
//                 console.log(`(Please ensure your name does not include a number.)`)
//             } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(nameManager)){
//                 console.log(`(Please ensure your name does not include a special character.)`)
//             }else{
//                 return true;
//             }
//         }
//     }
// ]


    // {
    //     type: 'number',
    //     message: `What is your manager's id?`,
    //     name: 'idManager',
    //     validate: (id) => {
    //         console.log(id)

    //         if(typeof id === `number` && !(id in myTeam)){
    //             return true;
    //         } else if(id in myTeam){
    //             console.log(`ID is already used, please try another ID number.`)
    //         }else if(id === "NaN"){
    //             console.log(`ID is already used, please try another ID number.`)
    //         }else{
    //             console.log(`Please ensure a valid number is typed in.`)
    //         }
    //     }
    // },
    // {
    //     type: 'input',
    //     message: `Enter the manager's email address?`,
    //     name: 'emailManager',
    //     validate: (id) => {
    //         const emailCriteria = /\S+@\S+\.\S+/;
    //         console.log(emailManager)
    //         if(emailCriteria.test(emailManager.value)){

    //             return true;
    //         } 
    //         else{
    //             return `Please enter a valid email.`
    //         }
    //     }
    // },
    // {
    //     type: 'number',
    //     message: 'What is the office number that your manager resides in?',
    //     name: 'officeManager',
    //     validate: (id) => {
    //         if(typeof id == `number` && !(id in myTeam)){
    //             return true;
    //         } else if(id in myTeam){
    //             return `ID is already used, please try another ID number.`
    //         }
    //         else{
    //             return `Please ensure a valid number is typed in.`
    //         }
    //     }
    // }




// const shape = new Employee();

// shape.getName();

// class Employee{
//     constructor(name, id, email, role){
//         this.name= name;
//         this.id=id;
//         this.email=email;
//         this.role=role;
//     }

//     getName(){
        
//     }

//     getID(){

//     }


//     getEmail(){

//     }

//     getRole(){

//     }
// }



// class Manager extends Employee{
//     constructor(name, id, email, role, officeNumber) {
//         this.officeNumber = officeNumber;
//     }
//     getRole(){}
// }

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