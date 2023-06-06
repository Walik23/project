(function(){
 
  'use strict';
  
  //function which defines a part of speech
  button.addEventListener('click',function(){
   
    const text = inputField.value;//capturing text inside input field

    //clearing output field from previous output
    let outputField = document.querySelector('#output');
    outputField.innerHTML = '';

    const sentences = text.split(separators).filter(Boolean);//spliting text by regular regex and deleting the empty elements
    const wordArrays = sentences.map(sentence => sentence.split(' '));//spliting sentences into words
  
  
  })

})()
