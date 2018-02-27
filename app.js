// const audio = document.querySelector('key')
console.log('from script file')

document.addEventListener(`audio[ data-key="${e.key}" ] `)







function playSound(e) {
	const audio = document.querySelector(` audio[ data-key= " ${e.keyCode} " ] `);
	const key = document.querySelector('div[data-key="${e.keyCode}"]');
	audio.currentTime =0;
	audio.play();
}