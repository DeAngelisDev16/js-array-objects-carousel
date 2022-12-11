const images = [
    {
       image: 'img/01.webp',
       title: 'Marvel\'s Spiderman Miles Morale',
       text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
       image: 'img/02.webp',
       title: 'Ratchet & Clank: Rift Apart',
       text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
       image: 'img/03.webp',
       title: 'Fortnite',
       text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
       image: 'img/04.webp',
       title: 'Stray',
       text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
       image: 'img/05.webp',
       title: "Marvel's Avengers",
       text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
 ];

 /* Milestone 0:
Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
dal js (dentro al nostro 'carousel-item', per capirci).
Milestone 1:
Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventerà visibile.
Milestone 2:
Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine. */

const containerImg = document.querySelector('div.carousel-image');
const buttonForward = document.querySelector('.next');
const buttonPreview = document.querySelector('.previous');
console.log(buttonForward);
console.log(buttonPreview);


let activeIndex = 0;

images.forEach((element) => {
   containerImg.innerHTML+=
      `<div class="my_carousel-item">
         <img src="${element.image}" alt="First image">
       </div>`
   
});

document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');




buttonForward.addEventListener(('click'), function(){
   document.querySelector('div.my_carousel-item.active').classList.remove('active');

   if(activeIndex >= 4){
      activeIndex = 0;
      
   } else {
      activeIndex ++;
   }

   document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');


    
});

buttonPreview.addEventListener(('click'), function(){
   document.querySelector('div.my_carousel-item.active').classList.remove('active');
   

   if(activeIndex <= 0){
      activeIndex = 4;
      
   } else {
      activeIndex --;
   }

   document.getElementsByClassName('my_carousel-item')[activeIndex].classList.add('active');

})


  







