import Books from './modules/Books.js';

import dateTime from './modules/dateTime.js';

const books = new Books();
const form = document.getElementById('form');
form.addEventListener('submit', () => {
  books.addBook();
});

dateTime();
