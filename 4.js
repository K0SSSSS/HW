// Задача: Фільтрація та групування книг
// У нас є список книг. Відфільтруйте цей список за певною категорією Fiction, а потім
// групувати книги за авторами. При цьому виведіть лише імена авторів та список їхніх книг.


// Список книг
const books = [
 { title: 'Book 1', author: 'Author A', category: 'Fiction' },
 { title: 'Book 2', author: 'Author B', category: 'Non-Fiction' },
 { title: 'Book 3', author: 'Author A', category: 'Fiction' },
 { title: 'Book 4', author: 'Author C', category: 'Mystery' },
 { title: 'Book 5', author: 'Author B', category: 'Fiction' },
];

const fictionBooks = books.filter(books => books.category === 'Fiction');
console.log(fictionBooks);

