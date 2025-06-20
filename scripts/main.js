const myLibrary = [];

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
	return `The ${this.title} by ${this.author}, ${this.pages} pages, read is ${this.read}.`;
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

addBookToLibrary('Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hunger Games', 'Suzanne Collins', 384, false);

console.log(myLibrary);

function showBookInLibrary() {
	myLibrary.forEach((item) => {
		console.log(item);
	});
}
showBookInLibrary();
