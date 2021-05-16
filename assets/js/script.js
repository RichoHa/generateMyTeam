const inquirer = require("../_tests_/node_modules/inquirer/lib/inquirer");
const fs = require('fs');

let myTeam = {};

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


function getManager(){
    inquirer.prompt(myManager)
    .then(response => {
        console.log(`success, output is ${response.nameManager}`)
    })
}

getManager();


//To test functions
module.exports = {
    testName,
    testID,
    testEmail,
    testOffice
}
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