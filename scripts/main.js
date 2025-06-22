const myLibrary = [];

const form = document.querySelector('.hidden');
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('.create-form-btn');
const closeButton = document.querySelector('dialog button');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const booksContainer = document.querySelector('.books-container');
const cancelBtn = document.querySelector('.cancel');

function Book(title, author, pages, read) {
	if (!new.target) {
		throw Error('No new keyword defined when creating the object');
	}
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
Book.prototype.info = function () {
	return `The ${this.title} by ${this.author}, ${this.pages} pages.`;
};

// const theHobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, false);

function addBookToLibrary(title, author, pages, read) {
	if (!title || !author || !pages || !read) {
		return;
	}
	// take params, create a book then store it in the array;
	const book = new Book(title, author, pages, read);
	const uuid = crypto.randomUUID();
	book.id = uuid;
	myLibrary.push(book);
	return;
}

addBookToLibrary('Hobbit', 'J.R.R. Tolkien', 295);
// addBookToLibrary('The Hunger Games', 'Suzanne Collins', 384);

function showBookInLibrary() {
	closeButton.addEventListener('click', (e) => {
		booksContainer.innerHTML = '';
		e.preventDefault();
		const bookTitle = inputTitle.value;
		const bookAuthor = inputAuthor.value;
		const bookPages = inputPages.value;
		const bookIsRead = document.querySelector(
			'input[name="read_status"]:checked'
		);

		addBookToLibrary(
			bookTitle,
			bookAuthor,
			bookPages,
			bookIsRead.value ?? 'no'
		);
		myLibrary.forEach((item) => {
			const div = document.createElement('div');
			div.classList.add('card');
			const p1 = document.createElement('p');
			const p2 = document.createElement('p');
			const p3 = document.createElement('p');
			const p4 = document.createElement('p');

			console.log(item);
			p1.textContent = item.title;
			p2.textContent = item.author;
			p3.textContent = item.pages;
			p4.textContent = item.read;
			div.appendChild(p1);
			div.appendChild(p2);
			div.appendChild(p3);
			div.appendChild(p4);
			booksContainer.appendChild(div);
		});
		console.log(myLibrary);
		clearInput();
	});
}

function clearInput() {
	inputTitle.value = ``;
	inputAuthor.value = ``;
	inputPages.value = ``;

	document.querySelectorAll('input[name="read_status"]:checked'),
		(input) => (input.checked = false);
}
showBookInLibrary();

console.log(myLibrary);
const cancelDialogBtn = cancelBtn.querySelector('.top');
console.log(cancelDialogBtn);

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
	dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
	dialog.close();
});
