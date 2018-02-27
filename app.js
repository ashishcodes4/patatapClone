// const audio = document.querySelector('key')
console.log('from script file')

// document.addEventListener(`audio[ data-key="${e.key}" ] `)




function test () {
	console.log('this is test function');
}

function removeTransition(e) {
	if(e.propertyName !=='transform') return;
	e.target.classList.remove('playing');
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio) return ;
	audio.currentTime =0;
	key.classList.add('playing');
	audio.play();
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);