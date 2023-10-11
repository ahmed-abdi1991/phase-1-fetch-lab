function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// Function to fetch books from the API
function fetchBooks() {
  const apiUrl = 'https://anapioficeandfire.com/api/books';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Call a function to render the books into the DOM
      renderBooks(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Function to render books into the DOM
function renderBooks(books) {
  const bookList = document.getElementById('book-list'); // Assuming you have an element with the id 'book-list' to render the books

  // Clear any previous content
  bookList.innerHTML = '';

  // Iterate through the books and create list items for each
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(listItem);
  });
}

// Call the fetchBooks() function to fetch and render books when needed
fetchBooks();
// Function to render book titles
function renderBooks(books) {
  const container = document.getElementById('bookContainer');

  // Iterate through the JSON object and create HTML elements
  books.forEach(book => {
      const bookElement = document.createElement('p');
      bookElement.textContent = book.title;
      container.appendChild(bookElement);
  });
}
