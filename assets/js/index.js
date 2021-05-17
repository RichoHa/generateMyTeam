const inquirer = require("../_tests_/node_modules/inquirer/lib/inquirer");
const fs = require('fs');
const prettier = require('../_tests_/node_modules/prettier');


//-------------------------------------My VALIDITY TESTS-------------------------------------------------------------------------------



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

function testGithub(github){
    if(github === ``){
        return `(Please enter a valid github name)`
    // } else if (id in myTeam){
        // return `(id is used, use another number)`
    }   else{
        return true;
    }
}

function testschool(testschool){
    if(testschool === ``){
        return `(Please enter a valid School name)`
    // } else if (id in myTeam){
        // return `(id is used, use another number)`
    }   else{
        return true;
    }
}

//Export the test functions
module.exports = {
    testName,
    testID,
    testEmail,
    testOffice,
    testGithub,
    testschool
};

//-------------------------------------My QUESTIONS-------------------------------------------------------------------------------
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

    const addedManager = new Manager(
        response.nameManager,
        response.idManager,
        response.emailManager,
        response.officeManager,
    );
    return addedManager
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
                return testGithub(github);
            }
        }
    ]
    const response = await inquirer.prompt(myEngineer);
    const addedEngineer = new Engineer(
        response.nameEngineer,
        response.idEngineer,
        response.emailEngineer,
        response.github,
    );
    return addedEngineer;
}

// Questions Regarding Engineer
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
            name: 'school',
            validate: (school) => {
                return testschool(school);
            }
        }
    ]
    const response = await inquirer.prompt(myIntern);
    const addedIntern = new Intern(
        response.nameIntern,
        response.idIntern,
        response.emailIntern,
        response.school,
    );
    return addedIntern;
}


async function choices() {
    const employeeType = [
      {
        type: 'list',
        name: 'employeeType',
        message: 'Please choose an option',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish'],
      },
    ];
      const response = await inquirer.prompt(employeeType);
      return response.employeeType;
}


//-------------------------------------My GENERATE FUNCTION-------------------------------------------------------------------------------

let htmlCode = "";

function generateHTML(){
    for(var i = 0; i< myTeam.length; i++){
        if(myTeam[i].getRole()==="Manager"){
            htmlCode += prettier.format(
                `
                <div class="Card">
                    <div>
                        <h1>${myTeam[i].name}</h1>
                        <p><i class="fas fa-mug-hot fa-lg"></i>${myTeam[i].getRole()}</p>
                    </div>
                    <div>
                        <p>ID: ${myTeam[i].id}</p>
                        <p>Email:<a href="mailto:${myTeam[i].email}"> ${myTeam[i].email}</a></p>
                        <p>Office number: ${myTeam[i].officeNumber}</p>
                    </div>
                </div>
                `
            ,
            { parser: 'html' })
        } else if (myTeam[i].getRole()==="Engineer"){
            htmlCode += prettier.format(
                `
                <div class="Card">
                    <div>
                        <h1>${myTeam[i].name}</h1>
                        <p><i class="fas fa-glasses fa-lg"></i> ${myTeam[i].getRole()}</p>
                    </div>
                    <div>
                        <p>ID:${myTeam[i].id}</p>
                        <p>Email:<a href="mailto:${myTeam[i].email}"> ${myTeam[i].email}</a></p>
                        <p>GitHub:<a href="https://github.com/${myTeam[i].gitHub}">${myTeam[i].gitHub}</a></p>
                    </div>
                </div>
                `
            ,
            { parser: 'html' })
        } else if (myTeam[i].getRole()==="Intern"){
            htmlCode += prettier.format(
                `
                <div class="Card">
                    <div>
                        <h1>${myTeam[i].name}</h1>
                        <p><i class="fas fa-graduation-cap fa-lg"></i> ${myTeam[i].getRole()}</p>
                    </div>
                    <div>
                        <p>ID:${myTeam[i].id}</p>
                        <p>Email:<a href="mailto:${myTeam[i].email}"> ${myTeam[i].email}</a></p>
                        <p>School: ${myTeam[i].school}</p>
                    </div>
                </div>
                `
            ,
            { parser: 'html' })
        }   

    }
    
    const finalHTML = prettier.format(
        `<!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>GenerateTeam</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link rel='stylesheet' type='text/css' media='screen' href='./assets/css/style.css'>
            <link href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" rel="stylesheet">
        
        </head>
        <body>
            <h1 id="header">My Team</h1>
            
            <div id="teamSection">
            ${htmlCode}
            </div>
            <script src='./assets/js/script.js'></script>
        </body>
        </html>
        `
    ,
    { parser: 'html' });

    fs.unlinkSync('../../index.html');
    fs.writeFileSync(`../../index.html`, finalHTML, function(err){
        if(err){
            return console.log("Error Occured")
        }else{
            console.log(`successfully created`)
        }
    })
}

//-------------------------------------My Classes-------------------------------------------------------------------------------

class Employee{
    constructor(name, id, email){
        this.name= name;
        this.id=id;
        this.email=email;
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



const myTeam = [];

//Running Code
async function Run() {

    if (myTeam.length<1){
    const manager = await myManagerFunction();
    myTeam.push(manager);
    Run();
    return;
    //myTeam[0].getRole() returns Manager
    //myTeam[0].name returns name etc
    }
    
    const checkAction = await choices();

    if(checkAction==='Add an Engineer'){
    const engineer = await myEngineerFunction();
    myTeam.push(engineer);
    Run();
    return;
    }

    if(checkAction==='Add an Intern'){
    const intern = await myInternFunction();
    myTeam.push(intern);
    Run();
    return;
    }
    generateHTML(myTeam);
}

Run();
