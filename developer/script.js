const more = document.getElementById('more');
const popup = document.getElementById('popup')
const more_popup = document.getElementById('more-popup')

more.addEventListener('click', () =>{
    more_popup.style.display = 'block';
    popup.style.display = 'flex';
});

more_popup.addEventListener('click', () =>{
    more_popup.style.display = 'none';
    popup.style.display = 'none';
})