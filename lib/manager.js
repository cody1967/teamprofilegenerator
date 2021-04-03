const Employee = require("./Employee");



class Manager extends Employee {
  constructor (name, id, email, officenum){
  super(name,id,email);
  this.officenum = officenum
  }
  fetchRole() {
    return "Manager";
  }
  fetchSchool() {
    return this.school;
  }
}
module.exports = Manager;