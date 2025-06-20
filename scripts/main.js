const myLibrary = [];

const btn = document.querySelector('.create-card-btn');
const form = document.querySelector('.hidden-form');
const formBtn = document.querySelector('.add-book-btn');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');

function Book(title, author, pages, read) {
	if (!new.target) {
		throw Error('No new keyword defined when creating the object');
	}
	this.title = title;
	this.author = author;
	this.pages = pages;
}
Book.prototype.info = function () {
	return `The ${this.title} by ${this.author}, ${this.pages} pages.`;
};

// const theHobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, false);

function addBookToLibrary(title, author, pages, read) {
	// take params, create a book then store it in the array;
	const book = new Book(title, author, pages, read);
	const uuid = crypto.randomUUID();
	book.id = uuid;
	myLibrary.push(book);
	return;
}

// addBookToLibrary('Hobbit', 'J.R.R. Tolkien', 295);
// addBookToLibrary('The Hunger Games', 'Suzanne Collins', 384);

function showBookInLibrary() {
	myLibrary.forEach((item) => {
		const div = document.createElement('div');
		div.classList.add('card');
	});
	formBtn.addEventListener('click', (e) => {
		e.preventDefault();
		const bookTitle = inputTitle.value;
		const bookAuthor = inputAuthor.value;
		const bookPages = inputPages.value;
		addBookToLibrary(bookTitle, bookAuthor, bookPages);
		console.log(myLibrary);
		clearInput();
	});
}
function clearInput() {
	inputTitle.value = ``;
	inputAuthor.value = ``;
	inputPages.value = ``;
}
showBookInLibrary();

btn.addEventListener('click', (e) => {
	form.classList.toggle('hidden-form');
});
