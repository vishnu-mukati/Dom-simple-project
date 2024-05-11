let form = document.getElementsByTagName('form')[0];


// create input for the label
let input = document.createElement('input');
let inputtext = document.createTextNode('description')
input.id = 'description';
input.setAttribute('type','text');
input.setAttribute('placeholder' , 'description-to-add')
input.appendChild(inputtext);

// inserbefor
let button = form.querySelector('button');
form.insertBefore(input, button);

//adding description
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description')


form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }
     
    let descriptionPara = document.getElementById('description');
    // Adding the fruit name to the list
    let fruitName = document.getElementById('fruit-to-add').value;
    let newli = document.createElement('li');
    newli.className = 'fruit';
    newli.innerHTML = fruitName + "<p>" + descriptionPara.value + "</p>" + '<button class="delete-btn">x</button>'//3
    newli.firstElementChild.style.fontStyle = "italic";
    fruititems.appendChild(newli);
    
    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});