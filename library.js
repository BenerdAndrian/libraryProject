const library=[];
function Book(name,author,pages){
    this.name=name;
    this.author=author;
    this.pages=pages;
}
function addBookToLibrary(book){
 library.push(book);
}
const book1=new Book("Binh Minh","Dang Van Linh",300);
const book2=new Book("Rain drops","Micheal borlean",166);
const book3=new Book("Hoang Thanh Thang Long","Ngo Cam Van",228);
const book4=new Book("Hoang Tu Be","Thomas Disken",116)
const book5=new Book("The Lichster Monster","Araw larks",336);
const book6=new Book("The History Of Pyramids","Lion Kings",267);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
const bookList=document.querySelector(".bookList")
function libraryDisplay(){
    bookList.innerHTML=``;
    for(let i=0;i<library.length;i++){
        bookList.innerHTML+=`<li class="book"><span>${library[i].name}</span>
                                              <span>${library[i].author}</span> 
                                              <span>${library[i].pages} pages</span>
                                              <button class="remove">Remove</button>
                                              </li>

        `

    }
    const books=document.querySelectorAll(".book");
    books.forEach((book,index)=>{
        book.setAttribute("data-index",index);
    })
}
libraryDisplay();
const openDialog=document.getElementById("openDialog");
const myDialog=document.getElementById("myDialog");
const closeDialog=document.getElementById("closeDialog");
const theForm=document.getElementById("theForm");
const bookTitle=document.getElementById("bookTitle");
const bookAuthor=document.getElementById("bookAuthor");
const bookPages=document.getElementById("bookPages");
openDialog.addEventListener("click",()=>{
myDialog.showModal();
})
closeDialog.addEventListener("click",()=>{
    myDialog.close();
})
theForm.addEventListener("submit",function(event){
const bookName=bookTitle.value;
const bookAuthors=bookAuthor.value;
const bookPage=bookPages.value;
const book=new Book(bookName,bookAuthors,bookPage);
library.push(book);
libraryDisplay();
// event.preventDefault();
})
document.addEventListener("click",function(event){
    if(event.target.classList.contains("remove")){
        const bookElement = event.target.parentElement; // Get parent element
        const index = bookElement.getAttribute("data-index"); // Get index
        library.splice(index, 1); // Remove book from array
        libraryDisplay(); // Re-render books
    }
})