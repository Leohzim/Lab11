function changeText(){
const elements = document.getElementsByClassName('text');
for(let i=0; i<elements.length; i++){
    elements[i].innerText = 'Text has been modified';
    
}

}