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
  // parentEle.innerHTML += `<li>${obj.username} - ${obj.email} - ${obj.phone}</li>`;



  let deletebtn = document.createElement('button');
  let deletebtntext = document.createTextNode('delete');
  deletebtn.type = 'button';
  deletebtn.value = 'Delete';
  deletebtn.appendChild(deletebtntext);
  deletebtn.onclick = () => {
    localStorage.removeItem(obj.email);
    parentEle.removeChild(childEle);
  }
  childEle.appendChild(deletebtn);
  parentEle.appendChild(childEle);

  let editbtn = document.createElement('button');
  let editbtntext = document.createTextNode('edit');
  editbtn.type = 'button';
  editbtn.value = 'Edit';
  editbtn.appendChild(editbtntext);
  editbtn.onclick = () => {
    edituserdetails(obj);
  }
  childEle.appendChild(editbtn);

}

function edituserdetails(obj){
  let storedObj = JSON.parse(localStorage.getItem(obj.email));
  localStorage.removeItem(obj.email);
  
  console.log(storedObj)

}