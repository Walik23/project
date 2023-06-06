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
   
     //defining a part of speech of word
     wordArrays.forEach((words) => {
         words.forEach((word) => {
             switch (true) {
                 case !isNaN(parseFloat(word)):
                     output (word)('numerator');
                     break;
                 case condition (prepositions)(word)('whole'):
                     output (word)('preposition');
                     break;
                 case condition (pronouns)(word)('whole'):
                     output (word)('pronoun');
                     break;
                 case condition (verbs)(word)('whole'):
                     output (word)('verb');
                     break;
                 case condition (adverbs)(word)('whole'):
                     output (word)('adverb');
                     break;
                 case condition (particles)(word)('whole'):
                     output (word)('particle');
                     break;
                 case condition (conjunctives)(word)('whole'):
                     output (word)('conjunctive');
                     break;
                 case condition (numerators)(word)('whole'):
                     output (word)('numerator');
                     break;
                 case condition (adverbsPref)(word)('prefix'):
                     output (word)('adverb');
                     break;
                 case condition (numeratorsPref)(word)('prefix'):
                     output (word)('numerator');
                     break;
                 case condition (pronounsPref)(word)('prefix'):
                     output (word)('pronoun');
                     break;
                 case condition (adjectivesEnds)(word)('ending'):
                     output (word)('adjective');
                     break;
                 case condition (prepositionsEnds)(word)('ending'):
                     output (word)('preposition');
                     break;
                 case condition (pronounsEnds)(word)('ending'):
                     output (word)('pronoun');
                     break;        
                 case condition (numeratorsEnds)(word)('ending'):
                     output (word)('numerator');
                     break;
                 case condition (adverbsEnds)(word)('ending'):
                     output (word)('adverb');
                     break;
                 case condition (verbsEnds)(word)('ending'):
                     output (word)('verb');
                     break;
                 case condition (nounsEnds)(word)('ending'):
                     output (word)('noun');
                     break;
                 default:
                     output (word)('undefined');
                     break;
             }
          });
       });
    });
    
    //function which activates the function above, when the key "enter" is pressed
    inputField.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
          button.click();
        }
    });
 

})()
