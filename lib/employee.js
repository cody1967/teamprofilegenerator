
function Employee(name, id, email) {
  this.name = name;
  this.id = id; 
  this.email = email;

  return `
  <div class="card m-2 col-lg-3 p-0>
    <div class="card-body p-0">
     <div class="card-header bg-primary text-white">
       <h3 class="card-title" >${this.Manager.name}</h3> 
       <h5 class="card-subtitle mb-2">${this.Manager.email}</h5>
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${this.Manager.id}</li>      
   </div>
  </div>
`
  








}
module.exports = Employee;