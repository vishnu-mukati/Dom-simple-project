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

