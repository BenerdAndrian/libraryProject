const library=[];
function book(name,author,pages){
    this.name=name;
    this.author=author;
    this.pages=pages;
}
function addBookToLibrary(book){
 library.push(book);
}
const book1=new book("Binh Minh","Dang Van Linh",300);
const book2=new book("Rain drops","Micheal borlean",166);
const book3=new book("Hoang Thanh Thang Long","Ngo Cam Van",228);
const book4=new book("Hoang Tu Be","Thomas Disken",116)
const book5=new book("The Lichster Monster","Araw larks",336);
const book6=new book("The History Of Pyramids","Lion Kings",267);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
const bookList=document.querySelector(".bookList")
for(let i=0;i<library.length;i++){
    bookList.innerHTML+=`<li class="book"><span>${library[i].name}</span>
                                          <span>${library[i].author}</span> 
                                          <span>${library[i].pages} pages</span></li>
                        
    `
}