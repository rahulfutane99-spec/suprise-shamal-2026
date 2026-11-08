let birthdayAudio=null;
function toggleMusic(){const b=document.getElementById('musicButton');if(!birthdayAudio){birthdayAudio=new Audio('assets/birthday-melody.wav');birthdayAudio.loop=true;birthdayAudio.volume=.55;}if(birthdayAudio.paused){birthdayAudio.play().then(()=>{b.textContent='♫ Pause birthday music'}).catch(()=>{b.textContent='♫ Tap to play music'});}else{birthdayAudio.pause();b.textContent='♫ Play birthday music';}}
document.addEventListener('DOMContentLoaded',()=>{const b=document.getElementById('musicButton');if(b)b.addEventListener('click',toggleMusic)});
