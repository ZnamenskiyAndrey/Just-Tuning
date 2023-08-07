var elem = document?.querySelector('.service-grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.service-card',
  layoutMode: 'masonry'
});


const filterBtns = document?.querySelectorAll('.filter__btn');

filterBtns?.forEach(button => {
  button?.addEventListener('click', (e) => {
    const filter = e.currentTarget.dataset.filter;

    // Удаляем класс "active" у всех кнопок
    filterBtns.forEach(btn => {
      btn.classList.remove('active');
    });

    // Добавляем класс "active" для выбранной кнопки
    e.currentTarget.classList.add('active');

    iso.arrange({ filter: filter });
  });
});


const burger = document?.querySelector('[data-burger]');
const menuMobile = document?.querySelector('[data-menumobile]');
const body = document.querySelector('.body');

burger?.addEventListener('click', () =>{
  body.classList.toggle('overflow')
  burger?.classList.toggle('burger--active');
  menuMobile?.classList.toggle('menu__visible');
});


// const showBtn = document.querySelector('.show__btn') 
// const cards = document.querySelectorAll('service__card')

// showBtn.addEventListener('click', function() {
//     cards.tog
//     cards.classList.remove = 'hidden'; // Показать блок
//     cards.classList.add = 'hidden'; // Показать блок
  
// });\

//работает 1 карточка
// const toggleButton = document.getElementById('showBtn');
// const hiddenBlock = document.getElementsByClassName('card');

// toggleButton.addEventListener('click', function() {
//   hiddenBlock.classList.toggle('hidden');
// });

// const toggleButtons = document.querySelectorAll('.show__btn');
// const hiddenBlocks = document.querySelectorAll('.service__card--hide');

// toggleButtons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     hiddenBlocks.forEach(function(block) {
//       block.classList.toggle('visible');
//     });

//     if (hiddenBlocks[0].classList.contains('visible')) {
//       button.textContent = 'Скрыть';
//       filterBtns.forEach(button => {
//         button.addEventListener('click', (e) => {
//           const filter = e.currentTarget.dataset.filter;
      
//           // Удаляем класс "active" у всех кнопок
//           filterBtns.forEach(btn => {
//             btn.classList.remove('active');
//           });
      
//           // Добавляем класс "active" для выбранной кнопки
//           e.currentTarget.classList.add('active');
      
//           iso.arrange({ filter: filter });
//         });
//       });
      
//     } else {
//       button.textContent = 'Показать еще';
//       filterBtns.forEach(button => {
//         button.addEventListener('click', (e) => {
//           const filter = e.currentTarget.dataset.filter;
      
//           // Удаляем класс "active" у всех кнопок
//           filterBtns.forEach(btn => {
//             btn.classList.remove('active');
//           });
      
//           // Добавляем класс "active" для выбранной кнопки
//           e.currentTarget.classList.add('active');
      
//           iso.arrange({ filter: filter });
//         });
//       });
      
//     }
//   });
// });