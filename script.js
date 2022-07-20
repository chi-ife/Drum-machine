

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`)
    const key = document.querySelector(`.drum-component[data-key = '${e.keyCode}']`)

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(e)

    key.classList.add('playing')
})

const keys = document.querySelectorAll('.drum-component')

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition))