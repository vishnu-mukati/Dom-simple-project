// //getting an edit button to it
let listitems = document.getElementsByTagName('li')

for(let i=0;i<listitems.length;i++)
    {
        
        var li = listitems[i];
        // console.log(li)
        let button = document.createElement('button');
        let buttontext = document.createTextNode('edit')
        button.className = 'edit-btn';
        button.appendChild(buttontext)
        li.appendChild(button)
    }


// // Function to add edit button to a list item
// function addEditButtonToListItem(li) {
//     let button = document.createElement('button');
//     let buttontext = document.createTextNode('edit')
//     button.className = 'edit-btn';
//     button.appendChild(buttontext)
//     li.appendChild(button)
// }

// // Add edit buttons to existing list items
// let listitems = document.getElementsByTagName('li');
// for (let i = 0; i < listitems.length; i++) {
//     addEditButtonToListItem(listitems[i]);
// }

let form = document.querySelector('form');
let fruititems = document.querySelector('.fruits');


form.addEventListener('submit',function(event){
    event.preventDefault(); // prevent default behaviour of the browser
    // grab the input element where the fruit name is writen
    let fruittoadd = document.getElementById('fruit-to-add'); 
    // create a new list for the new name of the fruit
    let newli = document.createElement('li');
    //create a new text node where the name is return
     newli.innerHTML = fruittoadd.value + '<button class="delete-btn">x</button>'
    // we can give the text to the li and create button in a single line of the code
    /**let newlitext = document.createTextNode(fruittoadd.value)//value is return because if we console the value of the input element then the name was print 
   newli.appendChild(newlitext);
   newli.className = 'fruit';
   let deletebtn = document.createElement('button');
   let deletebtntext = document.createTextNode('x'); \
    M  NTRTY ,. GBY\
    Qaz 12
   newli.appendChild(deletebtn);
   deletebtn.className = 'delete-btn';**/
   
//    addEditButtonToListItem(newli);

let editButton = document.createElement('button');
editButton.className = 'edit-btn';
editButton.textContent = 'edit';
newli.appendChild(editButton);

   fruititems.appendChild(newli)
})

// to apply delete functionality

fruititems.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete)
    }
})