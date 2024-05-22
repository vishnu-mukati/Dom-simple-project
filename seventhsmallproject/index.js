function handleFormSubmit(event){
    event.preventDefault();
  
      let username = event.target.username.value;
      let email = event.target.email.value;
      let phone = event.target.phone.value;
  
    let myobj = {
      username : username,
      email : email,
      phone : phone,
    }
  
  let myobj_serialized = JSON.stringify(myobj);

  
  localStorage.setItem('User Details', myobj_serialized);

// JSON.parse is used to deserialized means convert the string to an object
  let myobj_deserialized = JSON.parse(localStorage.getItem("User Details"));
   
    console.log(myobj_deserialized)
  }
