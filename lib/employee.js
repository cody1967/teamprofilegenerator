
class Employee  {

  constructor(name, id, email){
    this.name = name;
    this.id = id; 
    this.email = email;
  }
  
  fetchRole() {
    return "Employee";
  }
  fetchName() {
    return this.name
  }
  fetchId() {
    return this.id
  }
  fetchEmail() {
    return this.email
  }
}
module.exports = Employee;