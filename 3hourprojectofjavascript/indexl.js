document.addEventListener('DOMContentLoaded', loadExpenses);

function handleFormSubmit(event) {
    event.preventDefault();
  
    let expenseAmount = event.target.expenseAmount.value;
    let description = event.target.description.value;
    let category = event.target.category.value;
  
    let obj = {
        expenseAmount: expenseAmount,
        description: description,
        category: category,
    }
    localStorage.setItem(obj.expenseAmount, JSON.stringify(obj));
   
    // localStorage.setItem(description, JSON.stringify(obj));
    showUserOnScreen(obj);
    
  
    event.target.expenseAmount.value = '';
    event.target.description.value = '';
    event.target.category.value = '';
  }
  

  function showUserOnScreen(obj) {
    let parentEle = document.getElementById('userList');
    let childEle = document.createElement('li');
    childEle.textContent = obj.expenseAmount + ' - ' + obj.description + ' - ' + obj.category
    // parentEle.innerHTML += `<li>${obj.username} - ${obj.email} - ${obj.phone</li>`;
  
  
  
    let deletebtn = document.createElement('button');
    let deletebtntext = document.createTextNode('Delete Expence');
    deletebtn.type = 'button';
    deletebtn.value = 'Delete Expence';
    deletebtn.appendChild(deletebtntext);
    deletebtn.onclick = () => {
      localStorage.removeItem(obj.expenseAmount);
      parentEle.removeChild(childEle);
    }
    childEle.appendChild(deletebtn);
    parentEle.appendChild(childEle);

    let editbtn = document.createElement('button');
    let editbtntext = document.createTextNode('Edit Expence');
    editbtn.type = 'button';
    editbtn.value = 'Edit Expence';
    editbtn.appendChild(editbtntext);
    editbtn.onclick = () => {
      let storedObj = JSON.parse(localStorage.getItem(obj.expenseAmount));
      localStorage.removeItem(obj.expenseAmount);
      parentEle.removeChild(childEle);
      document.getElementById('expenseAmount').value = storedObj.expenseAmount;
      document.getElementById('description').value = storedObj.description;
      document.getElementById('category').value = storedObj.category;

    //   let inputField = document.querySelectorAll('#expenseAmount , #description , #category');
    //   inputField[0].value = storedObj.expenseAmount;
    //   inputField[1].value = storedObj.description;
    //   inputField[2].value = storedObj.category;
    }
    childEle.appendChild(editbtn);
  }
  function loadExpenses() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i); // Correctly get the key at index i
        let expense = JSON.parse(localStorage.getItem(key));
        showUserOnScreen(expense);
    }
}