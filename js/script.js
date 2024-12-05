/*
studio endpoint
- dati che mi servono:
title
url dell'immagine
*/

const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
const container = document.querySelector('.container');
const userCard = document.querySelector('.user-cards');
const errorEl = document.querySelector('.error-text');
let counter = 0;

photo()

function photo() {
  // photoArray = [];
  errorEl.innerHTML = '';

  axios.get(endpoint)
    .then(response => {
      console.log('axios:', response.data);
      const photoArray = response.data.map(photo => {
        return { title: photo.title, url: photo.url };  // Estraggo title e url di tutte le img(destrutturazione)
      });

      showAllCards(photoArray);
    })
    .catch(e => {
      console.log('Errore:', e.message);
      printError(e.message)
    });

}

// Una volta che tutte le card sono raccolte, mostra tutte le card
function showAllCards(photoArray) {
  //variabile che accumula tutte le card
  let allCard = '';

  photoArray.forEach(card => {
    allCard += showCards(card);
  });
  userCard.innerHTML += allCard  //stampo tutte le card insieme
}

// prepara tutte le card
function showCards(card) {
  const { title, url } = card;
  return `<div class="single-user-card col-4 mx-3 my-3">
            <img src="assets_day1/img/pin.svg" alt="pin" class="pin">
            <img src="${url}" alt=".." class="my-3">
            <p class="text-card">${title}</p>
          </div>`;
}

// messaggio di errore
function printError(errorMessage) {
  errorEl.innerHTML = `<p>${errorMessage}</p>`;
}


// giorno 2
const overlayImgBtn = document.querySelector('.overlay');
const button = document.querySelector('.btn');
// const singleUserCard = document.querySelectorAll('.single-user-card')
console.log(showCards);


button.addEventListener('click', () => {
  overlayImgBtn.classList.add('d-none')
})

userCard.addEventListener('click', () => {
  userCard.classList.add('d-none')
  overlayImgBtn.classList.remove('d-none')
  userCard.classList.remove('d-none')
})