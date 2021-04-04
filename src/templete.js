// dynamically create my html
function returnHtmlStringOfEmployees(empy) {
  console.log(empy)
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <title>Team Profile</title>
 </head>
 <body>
  <nav class="navbar navbar-dark bg-dark mb-5">
      <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
  </nav>
  <div class="container">
      <div class="row">


  <title>Document</title>
</head>
<body>
  <div class="container">        
  ${returnHtmlStringOfManager(empy)}
  </div>
</body>
</html>
  `
}


function returnHtmlStringOfManager(Manager) {
  return `
<div class="card m-2 col-lg-3 p-0">
  <div class="card-body p-0">
   <div class="card-header bg-primary text-white">
     <h3 class="card-title" >${Manager.name}</h3> 
     <h5 class="card-subtitle mb-2">${Manager.email}</h5>
    </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${Manager.id}</li> 
      <li class="list-group-item">${Manager.officenum}</li>     
 </div>
</div>
`
}


function returnHtmlStringOfIntern(Intern) {
  return `
  <div class="card m-2 col-lg-3 p-0>
    <div class="card-body p-0">
     <div class="card-header bg-primary text-white">
       <h3 class="card-title" >${Intern.name}</h3> 
       <h5 class="card-subtitle mb-2">${intern.id}</h5>
      </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${Intern.email}</li> 
        <li class="list-group-item">${Intern.school}</li>    
   </div>
  </div>
  `
}
function returnHtmlStringOfEngineer(Engineer) {
  return `
    <div class="card m-2 col-lg-3 p-0>
      <div class="card-body p-0">
       <div class="card-header bg-primary text-white">
         <h3 class="card-title" >${Engineer.name}</h3> 
         <h5 class="card-subtitle mb-2">${Engineer.id}</h5>
        </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${Engineer.email}</li> 
          <li class="list-group-item">${Engineer.github}</li>    
     </div>
    </div>
    `
}





module.exports = returnHtmlStringOfEmployees
// link style.css in the html
// link bootstrap in the html