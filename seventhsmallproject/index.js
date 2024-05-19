function handleFormSubmit(event){
    event.preventDefault();
  
      let username = event.target.username.value;
      let email = event.target.email.value;
      let phone = event.target.phone.value;
  
    let myobj = {
      username : username,
      email : email,
      phone : phone
    }
  
  let myobj_serialized = JSON.stringify(myobj);
  
  localStorage.setItem('User Details', myobj_serialized);
    
  }