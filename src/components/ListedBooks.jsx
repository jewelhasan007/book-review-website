import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { getStoredBookForRead } from "./StoredBook";
import ListedReadBooks from "./ListedReadBooks";
import { parse } from "postcss";
import { getStoredBookForWished } from "./WishedBook";
import { Link } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishedBooks, setWishedBooks] = useState([]);

  const [displayReadBooks, setDisplayReadBooks] = useState([])
  const [displayWishedBooks, setDisplayWishedBooks] = useState([])

  const handleDisplayFilter = filter =>{
    if(filter === 'all'){
      setDisplayReadBooks(readBooks);
    }
  else if (filter === 'category'){
    const categoryBooks = readBooks.filter(book => book.category === 'Fiction');
    console.log(categoryBooks);
        setDisplayReadBooks(categoryBooks);
  }
  else if (filter === 'pages'){
    const page = readBooks.filter(book => book.totalPages === 'pages');
        setDisplayReadBooks(page);
  }
  else if (filter === 'year'){
    const year = readBooks.filter(book => book.yearOfPublishing === 'year');
        setDisplayReadBooks(year);
  }

  }

  useEffect(()=>{
    const readList = getStoredBookForRead();
    console.log(readList)
    console.log(typeof readList)
    if(books.length >0){
     //WAY-01
      const readBookList = books.filter(book => readList.includes(book.bookId));

    //  WAY-02
      // const readBookList = [];
      // for(const id of readList){
      //   const book = books.find(book=>book.bookId===id);
      //   if(book){
      //     readBookList.push(book)
      //   }
      // }
      setReadBooks(readBookList);
      setDisplayReadBooks(readBookList)

    }
   
  },[])

  useEffect(()=>{
    const wishList = getStoredBookForWished();
    if (books.length > 0){
      const wishBookList = books.filter(book => wishList.includes(book.bookId));
      setWishedBooks(wishBookList);
      setDisplayWishedBooks(wishBookList)
    }
  },[])

    return (
<div>
  <Helmet><title>Listed Books || Book Vibe</title></Helmet>
 
<h1 className="text-center font-bold text-2xl m-3">Books</h1>

<div className="text-center">
  <select className="select select-accent w-full max-w-xs bg-green-500 text-white font-bold" onChange={(e)=>handleDisplayFilter(e.target.value)}>
<option value="all"> All</option>
<option value="category"> category</option>
<option value="pages">pages</option>
<option value="published"> published</option>
 
</select>
  </div>

  <div role="tablist" className="tabs tabs-lifted m-3 p-4">
  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold  [--tab-bg:gray] [--tab-border-color:green]" aria-label="Read Books" defaultChecked/>
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  {/* <h1 className="text-3xl">Read Book Lists: {readBooks.length}</h1> */}
      {
        displayReadBooks.map(book => <ListedReadBooks key={book.id} book={book}></ListedReadBooks> )
      }
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold" aria-label="Wishlist Books"  />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    {
      displayWishedBooks.map(book => <ListedReadBooks key={book.id} book={book}></ListedReadBooks>)
  }
  </div>
</div>

</div>
 
    );
};

export default ListedBooks;