//  Need to get input from the user- inquirer
const inquirer = require("inquirer");
const { fstat } = require("node:fs");
const Employee = require('../lib/Employee');

inquirer.prompt([
  {
    type:"input",
    name:"name",
    message:"What is the employee name?"
  
  }
]) .then(function(response){
  console.log("resp", response)

// creat employee objects from input
const empy = new Employee(response.name, 0, email)
})
// create html from the emplyee objects 

//  write out that html to the file 
