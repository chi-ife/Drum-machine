
// function to listen for when key is pressed and play sound
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const key = document.querySelector(`.drum-component[data-key = '${e.keyCode}']`);

    if(!audio) return; //to ignore any key without an audio assigned to it
    audio.currentTime = 0; //so that the sound plays as consistently as you hit the key(not waiting for the audio to finish running before it can play again)
    audio.play();


    key.classList.add('playing') //adding the class 'playing', i.e. a visual change for when the key is pressed
})

const keys = document.querySelectorAll('.drum-component')

//function to end the transition once the key has been played
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //to ignore changes in all other properties that are not the 'transform' property
    this.classList.remove('playing') //to remove the class 'playing' once the audio has been played
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //listening for once the audio has been played and calling for the removeTransition function