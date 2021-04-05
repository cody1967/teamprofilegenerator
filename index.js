//  Need to get input from the user- inquirer
const inquirer = require("inquirer");
const path = require('path');
const tempy = require("./src/templete");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer")
const Employee = require("./lib/employee")


inquirer.prompt([

  {
    message: "Welcome to the Team Geneator! Please write your team name:",
    name: "teamname"
  },

  {
    type: "input",
    name: "name",
    message: "What is the employee name?"

  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?"

  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id?"

  }

  // wrap all the prompts in a function console questions call at end 


]).then(function (response) {
  console.log("resp", response)

  // creat employee objects from input
  const empy = new Manager(response.name, 0, response.email, 0)
  const html = tempy(empy)
  fs.writeFileSync("./dist/index.html", html)

})
// create html from the emplyee objects

//  write out that html to the file 
// call function at very end

