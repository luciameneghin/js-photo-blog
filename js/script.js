/*
studio endpoint
- dati che mi servono:
title
url dell'immagine
*/

const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
const container = document.querySelector('.container');
const userCard = document.querySelector('.user-cards');


axios.get(endpoint)
  .then(response => {
    console.log('axios:', response.data);
    response.data.forEach(card => {
      showCards(card);
    });
  })
  .catch(e => {
    console.error('Errore nel recupero dei dati:', e);
  });

function showCards(card) {
  const { title, url } = card;
  userCard.innerHTML += `<div class="single-user-card col-4 mx-3 my-3">
            <img src="assets_day1/img/pin.svg" alt="pin" class="pin">
            <img src="${url}" alt=".." class="my-3">
            <p class="text-card">${title}</p>
          </div>`;
}

