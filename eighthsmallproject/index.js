// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();

  let username = event.target.username.value;
  let email = event.target.email.value;
  let phone = event.target.phone.value;

  let obj = {
    username: username,
    email: email,
    phone: phone,
  }
  localStorage.setItem(obj.email, JSON.stringify(obj));
  showUserOnScreen(obj);

  event.target.username.value = '';
  event.target.email.value = '';
  event.target.phone.value = '';
}

// module.exports = handleFormSubmit;

function showUserOnScreen(obj) {
  let parentEle = document.getElementById('userList');
  let childEle = document.createElement('li');
  childEle.textContent = obj.email + ' - ' + obj.username + ' - ' + obj.phone
  // parentEle.innerHTML += `<li>${obj.username} - ${obj.email} - ${obj.phone</li>`;

 // adding delete functionality on the screen
 let deletebtn = document.createElement('button');
 deletebtn.textContent = 'delete'

 
 childEle.appendChild(deletebtn);
 parentEle.appendChild(childEle);
}
