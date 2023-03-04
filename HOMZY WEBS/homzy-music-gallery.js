const cards = document.querySelectorAll('.card');
const totalPages = Math.ceil(cards.length / 12);
let currentPage = 1;

function showCards() {
  cards.forEach((card, index) => {
    if (index >= (currentPage - 1) * 12 && index < currentPage * 12) {
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
