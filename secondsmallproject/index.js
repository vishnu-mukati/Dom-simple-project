// Write your code below:
let listname = document.getElementsByTagName('li');
listname[4].style.color = 'blue';
for(let i=0;i<listname.length;i++)
  {
    listname[i].style.fontStyle = 'italic';
  }

  let mainheding = document.querySelector('#main-heading');
mainheding.style.textAlign = 'center';

let fruits = document.querySelector('.fruit');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width ='50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType ='none';

let basketheading = document.querySelector('h2');
basketheading.style.marginleft ='30px';

let fruititems = document.querySelectorAll('.fruit');
for(let i=0;i<fruititems.length;i++)
  {
    fruititems[i].style.backgroundColor ='white';
    fruititems[i].style.padding ='10px';
    fruititems[i].style.margin  = '10px';
    fruititems[i].style.borderRadius = '5px';
  }

let oddfruititems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<oddfruititems.length;i++)
  {
    oddfruititems[i].style.backgroundColor = 'lightgray';
  }
// Write answer to the questions asked below:

let basket = document.querySelector('#basket-heading');
basket.style.color = 'brown';

let fr = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<fr.length;i++)
  {
      fr[i].style.backgroundColor = 'brown';
      fr[i].style.color = 'white';
  }


