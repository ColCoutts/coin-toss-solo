import catOrDog from './cat-or-dog.js';

const image = document.getElementById('animal');
const flipForm = document.getElementById('flip-form');
let loseText = document.getElementById('result-board');
let winText = document.getElementById('result-board');

let clicks = 0;
let clickCount = document.getElementById('wins').innerText = clicks;
let loseCount = document.getElementById('losses').innerText = clicks;

flipForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    
    let animal = catOrDog(randomNumber); 
    let imageSource = '';
    if(animal === 'cat'){
        imageSource = '../assets/cat.jpg';
        // console.log('cat');
    } else {
        imageSource = '../assets/dog.jpg';
        // console.log('dog');
    }
    
    image.src = imageSource;
    image.classList.remove('hidden');
    
    const userChoice = flipForm.elements.animal.value;
    

    if(userChoice === animal){
        winText.textContent = 'winner';
        clickCount += 1;
        document.getElementById('wins').innerText = clickCount;
        console.log(clickCount);
    } else {
        loseCount += 1;
        document.getElementById('losses').innerText = loseCount;
        loseText.textContent = 'loser';
    }

});

