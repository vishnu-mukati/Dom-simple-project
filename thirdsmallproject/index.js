let h3 = document.createElement('h3');
let h3text = document.createTextNode('Buy high quality organic fruits online');
h3.append(h3text);
h3.style.fontStyle = 'italic';
let div = document.getElementsByTagName('div');
let firstdiv = div[0];
firstdiv.appendChild(h3)

let p = document.createElement('p');
let ptext = document.createTextNode('Total fruits: 4')
p.setAttribute('id','fruits-total')
p.append(ptext);
let sdiv = document.getElementsByTagName('div');
let seconddiv = div[1];
seconddiv.appendChild(p)
