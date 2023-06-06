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
  
    //function for comparing words with arrays
    const condition = (partOfSpeech) => (word) => (compareWith) => { 
         const cleanWord = word.replace(/^[^\wА-Яа-яіІїЇєЄ]+|[^\wА-Яа-яіІїЇєЄ]+$/g, '').toLowerCase();//clearing words from dots, comas etc. 
         let truly = null;
         //comparing words with arrays
         switch (compareWith) {
             case 'ending':
                 if(partOfSpeech.some(element => cleanWord.endsWith(element) && (element.length < cleanWord.length))){
                     truly = true;
                 };
                 break;
             case 'whole':
                 if(partOfSpeech.includes(cleanWord)){
                     truly = true;
                 };
                 break;
             case 'prefix':
                 if(partOfSpeech.some(element => cleanWord.startsWith(element) && (element.length < cleanWord.length))){
                     truly = true;
                 };
                 break;
         };
         return truly;
     };
     
     //function for outputing words into output field and console; assign classes to words
     const output = (word) => (myClass) => {
          if(myClass === 'undefined'){
              console.log(`word "${word}" is undefined`); 
              outputField.innerHTML += `<span class=${myClass}>${word} </span>`
          }
          else{
              console.log(`word "${word}" is ${myClass}`);
              outputField.innerHTML += `<span class=${myClass}>${word} </span>`
          }
     };
   
   
  })

})()
