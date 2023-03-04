

/*********************************hero page****************** */
var slideImg = document.getElementById ("slideImg");
var images = new Array(

    "./images/homzy music production home image1.png",
    "./images/homzy music production home image2.png",
    "./images/homzy music production home image3.webp",
    "./images/homzy music production home image4.jpg",
    "./images/homzy music production home image5.jpg",
    "./images/homzy music production home image6.jpg"

);

var len = images.length;
var i = 0;

function slide() {
    if (i > len - 1){
        i = 0; 
    }
    slideImg.src = images[i];
    i++;
    setTimeout("slide()",3000); 
};


/**************************Navigation toggle*************/
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
    nav = document.querySelector('.nav-bar');
    nav.classList.toggle('active');

};

/*******************  Read More  ********************************/
const readMoreBtn = document.querySelector(".read-more");
const readMoreContent = document.querySelector(".read-more-content")

  readMoreBtn.addEventListener("click", ()=> {
    readMoreContent.classList.toggle("show-content");
    if(readMoreContent.classList.contains("show-content")){
      readMoreBtn.textContent = "Show Less";
    } else {
      readMoreBtn.textContent = "Read More"
    }
  });

/********************************Music Gallery***************** 

const cards = document.querySelectorAll('.card');
const totalPages = Math.ceil(cards.length / 15);
let currentPage = 1;

function showCards() {
  cards.forEach((card, index) => {
    if (index >= (currentPage - 1) * 15 && index < currentPage * 15) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });

  document.querySelector('#pageNumber').textContent = currentPage;
  document.querySelector('#totalPages').textContent = totalPages;
}

document.querySelector('#prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    showCards();
  }
});

document.querySelector('#nextPage').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    showCards();
  }
});

showCards();
*/