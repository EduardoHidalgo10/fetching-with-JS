'use strict'




document.addEventListener('DOMContentLoaded', function() {

    const userContainer = document.querySelector('#user-container');
    const UserURL = 'https://jsonplaceholder.typicode.com/users';



    fetch(`${UserURL}`)
        .then(response => response.json())
        .then(userData => userData.forEach(function(user) {
            userContainer.innerHTML += `
      <div id = user-${user.id}>
      <h3>${user.name}</h3>
      <p>Username : ${user.username}<p>
      <p>Email : ${user.email}</p>
     <p>Address :  ${user.address.street} , ${user.address.suite} , ${user.address.city} , ${user.address.zipcode}</p>
     <p>Phone Number : ${user.phone}</p>
     <p>Company : ${user.company.name} - "${user.company.catchPhrase}"</p>
<hr>
      </div>
      `
        }))
})