//  Need to get input from the user- inquirer
const inquirer = require("inquirer");
const { fstat } = require("node:fs"); 
const Employee = require('../lib/Employee');
// require intern,manager,Engineer
// require path
inquirer.prompt([
  {
    type:"input",
    name:"name",
    message:"What is the employee name?"
  
  }
// wrap all the prompts in a function console questions call at end 


]) .then(function(response){
  console.log("resp", response)

// creat employee objects from input
const empy = new Employee(response.name, 0, email)
})
// create html from the emplyee objects 

//  write out that html to the file 
// call function at very end