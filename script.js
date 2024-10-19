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


// const quote = document.getElementById('quote');
// const quote1 = "We Believe we can make the world a better place";
// const quote2 = "If the product is free then you are the product";


// function change_quote(){
//     if (quote.textContent == quote1){
//         quote.textContent = quote2;
//     } else{
//         quote.textContent = quote1;
//     }
// }

// setInterval(change_quote, 5000)