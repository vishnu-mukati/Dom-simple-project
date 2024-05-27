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
  