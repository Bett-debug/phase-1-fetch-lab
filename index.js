




// Automatically run fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
 
}
);


//fetching game of thrones books and passing them to the API


function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
}

//renderBooks function to display the books on the page
document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}






