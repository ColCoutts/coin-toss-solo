import catOrDog from './cat-or-dog.js';

const image = document.getElementById('animal');
const flipForm = document.getElementById('flip-form');
let winText = document.getElementById('result-board');
let loseText = document.getElementById('result-board');


flipForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const randomNumber = Math.random();
    
    let animal = catOrDog(randomNumber); 
    let imageSource = '';
    
    if(animal === 'cat'){
        imageSource = '../assets/cat.jpg';
        console.log('cat');
    } else {
        imageSource = '../assets/dog.jpg';
        console.log('dog');
    }
    
    image.src = imageSource;
    image.classList.remove('hidden');
    
    const userChoice = flipForm.elements.animal.value;

    if(userChoice === false){
        winText.textContent = 'winner';
    } else {
        loseText.textContent = 'loser';
    }

})

