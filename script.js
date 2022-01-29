function search() {
    const url="https://www.anapioficeandfire.com/api/books";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(users){
        getData(users);
    })
    .catch(function(error){
        console.log(error);
    })
}

//Selecting the div-books
function getData(books){
    //will use which contain empty results
    let booksDiv=document.querySelector("#books")
    booksDiv.innerHTML="";

//Create a table element

let table=document.createElement("table")
var header = table.createTHead();
var row = header.insertRow(0);
  var cell = row.insertCell(0);
  cell.innerHTML = "<b>Release Date</b>";
  
  var cell = row.insertCell(0);
  cell.innerHTML="<b> Name of the Publisher</b>"
  var cell = row.insertCell(0);
  cell.innerHTML="<b>Number of Pages</b>"
  var cell = row.insertCell(0);
  cell.innerHTML="<b>Author</b>"
  var cell = row.insertCell(0);
  cell.innerHTML="<b>ISBN </b>"
  var cell = row.insertCell(0);
  cell.innerHTML="<b> Name of the Book</b>"
  
//Iterate over user data and Display data over the UI
books.forEach(currentBook => {
    let row=table.insertRow();
    let name=row.insertCell()
    name.innerHTML=currentBook.name;

//Adding isbn number to the display
let isbn=row.insertCell();
isbn.innerHTML=currentBook.isbn;

//Adding authors to the display
let authors=row.insertCell();
authors.innerHTML=currentBook.authors;

//Adding numberofPages to the display
let numberOfPages=row.insertCell();
numberOfPages.innerHTML=currentBook.numberOfPages;

//Adding publisher name to the display
let publisher=row.insertCell();
publisher.innerHTML=currentBook.publisher;

//Adding release date to the display
let releasedate= row.insertCell();
releasedate.innerHTML=currentBook.released;

    
});

//Appending div content to table
booksDiv.appendChild(table);

}

