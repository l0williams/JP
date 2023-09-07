const portfolio = document.querySelector('section.portfolio_design');
const images = portfolio.querySelectorAll('.image_container .image img');
const image_container = portfolio.querySelector('.image_container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentImageIndex = 0;
let currentPage = 1;
const itemsPerPage = 6;

function showPage(pageNumber) {
  images.forEach((image, index) => {
    if (index >= (pageNumber - 1) * itemsPerPage && index < pageNumber * itemsPerPage) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}
function updateButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(images.length / itemsPerPage);
}
  
// Initial display
showPage(currentPage);
updateButtons();
  
  // Previous button click event
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      updateButtons();
    }
});
  
  // Next button click event
nextButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
      currentPage++;
      showPage(currentPage);
      updateButtons();
    }
});
function ClosePopUP() {
  portfolio.querySelector('div.pop_up').style.display = 'none';
}

function ShowPopUP(imageToShow) {
  portfolio.querySelector('div.pop_up').style.display = 'block';
  portfolio.querySelector('div.pop_up .image').innerHTML = `
    <img src="${imageToShow}" alt="">
  `
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const imageToShow = images[currentImageIndex].getAttribute("src");
  ShowPopUP(imageToShow);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const imageToShow = images[currentImageIndex].getAttribute("src");
    ShowPopUP(imageToShow);
}

images.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();
    currentImageIndex = index;
    const imageToShow = image.getAttribute("src");
    ShowPopUP(imageToShow);
  });
});

portfolio.querySelector('div.pop_up .close').addEventListener('click', () => {
  ClosePopUP();
});
portfolio.querySelector('button.next').addEventListener('click', () => {
  showNextImage();
});
portfolio.querySelector('button.prev').addEventListener('click', ()=>{
    showPrevImage();
})