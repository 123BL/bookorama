// var btns = document.querySelectorAll("#book-list .delete");
// Array.from(btns).forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

const list = document.querySelector("#book-list ul");

//delete books
list.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//add books
const addForm = document.forms["add-book"];

addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;
  //create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //add classes
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  //clear textbox
  addForm.querySelector('input[type="text"]').value = "";
});
//hide book
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
//filter books
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
