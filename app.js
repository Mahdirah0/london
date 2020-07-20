let slideShow = document.querySelector('.slide-show');
let burger = document.querySelector('.burger');
let cross = document.querySelector('.cross');
let slideList = document.querySelectorAll('.nav-links-slide li a');

burger.addEventListener('click', () => {
  if (slideShow.classList.contains('active-slide')) {
    slideShow.classList.remove('active-slide');
  } else {
    slideShow.classList.add('active-slide');
  }
  cross.addEventListener('click', () => {
    slideShow.classList.remove('active-slide');
  });
});

slideList.forEach((item) => {
  item.addEventListener('click', () => {
    slideShow.classList.remove('active-slide');
    console.log(item);
  });
});
