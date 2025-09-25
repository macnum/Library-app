const myLibrary = [];

const addBookBtn = document.querySelector(".submit");
const closerequestDialog = document.querySelector("[closedby='closerequest']");
const closerequestBtn = document.getElementById("closerequest-btn");
const closeBtn = document.querySelector(".close");

class Book {
  constructor(title, author, pages, read = false) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead() {
    this.read = !this.read;
  }
}

const book1 = new Book("The Hobbit", "J.R.R.", 295);
addBookToLibrary("The Hobbit", "J.R.R.", 295);
addBookToLibrary("Mr Nice", "RMD", 189);

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  book.id = crypto.randomUUID();
  myLibrary.push(book);
}

// for event clicker  dialog
closerequestBtn.addEventListener("click", () => {
  closerequestDialog.showModal();
});
closeBtn.addEventListener("click", () => {
  closeBtn.parentElement.close();
});
const book = document.querySelector(".book");

book.addEventListener("click", (e) => {
  e.preventDefault();
  const inputTitle = document.querySelector("input#title");
  const inputAuthor = document.querySelector("input#author");
  const inputPages = document.querySelector("input#pages");

  const bookTitle = inputTitle.value;
  const bookAuthor = inputAuthor.value;
  const bookPages = inputPages.value;
  if (bookTitle == "" || bookAuthor == "" || bookPages == "") {
    return;
  }

  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";

  addBookToLibrary(bookTitle, bookAuthor, bookPages);
  createCard();
});

const cardContainer = document.querySelector(".card-container");

function createCard() {
  cardContainer.innerHTML = "";
  myLibrary.forEach((obj) => {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const titleInfo = document.createElement("li");
    const authorInfo = document.createElement("li");
    const pagesInfo = document.createElement("li");
    const toggleReadBtn = document.createElement("button");
    const readStatus = document.createElement("li");
    const btn = document.createElement("button");

    div.classList.add("card");
    div.dataset.id = obj.id;

    btn.innerHTML = `<span><i class="fa-solid fa-xmark"></i></span>`;
    btn.classList.add("close", "close-card-btn");

    toggleReadBtn.textContent = obj.read ? "Mark Unread" : "Mark Read";
    toggleReadBtn.classList.add("toggle-read-btn");

    titleInfo.textContent = obj.title;
    authorInfo.textContent = obj.author;
    pagesInfo.textContent = `${obj.pages} Pages`;
    readStatus.textContent = `Read: ${obj.read ? "Yes" : "No"}`;

    div.appendChild(btn);
    ul.appendChild(titleInfo);
    ul.appendChild(authorInfo);
    ul.appendChild(pagesInfo);
    ul.appendChild(readStatus);
    div.appendChild(ul);
    div.appendChild(toggleReadBtn);
    cardContainer.appendChild(div);

    btn.addEventListener("click", (e) => {
      const bookId = div.dataset.id;

      const index = myLibrary.findIndex((itemId) => itemId.id === bookId);
      console.log(index);
      if (index != -1) {
        myLibrary.splice(index, 1);
        div.remove();
      }
    });
    toggleReadBtn.addEventListener("click", () => {
      obj.toggleRead();
      createCard();
    });
  });
}
createCard();
