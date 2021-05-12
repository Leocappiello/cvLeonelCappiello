//key value 
let keys = document.getElementsByClassName('key')
let values = document.getElementsByClassName('valueText')

for(i = 0; i<  keys.length; i++){
    keys[i].innerHTML = `<q>${keys[i].innerHTML}</q>:`;
}
for(i = 0; i<  values.length-1; i++){
    values[i].innerHTML = `<q>${values[i].innerHTML}</q>,`;
}
