const sharebtn = document.getElementById('share');
const sharebtn2 = document.getElementById('share2');
const social = document.querySelector('.social');



sharebtn.addEventListener('click',() => {
    social.classList.toggle('hidden')
})

sharebtn2.addEventListener('click',() => {
    social.classList.toggle('hidden')
})