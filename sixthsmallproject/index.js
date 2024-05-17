function handleFormSubmit(event){
    event.preventDefault();
    
    let username = event.target.username.value;
    localStorage.setItem('Username',username)

    let email = event.target.email.value;
    localStorage.setItem('Email', email);

    let phone = event.target.phone.value;
    localStorage.setItem('Phone', phone)
  
} 