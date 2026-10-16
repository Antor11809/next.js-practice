import React from 'react';


const getBooks = async() => {
    const res = await fetch ('http://localhost:3000/booksData.json')
    const data = await res.json();
    return data;
}

const BookCard = async() => {
    const booksdata = await getBooks();
    return (

        <div className='ml-15'>
    {booksdata.map((book, ind)=> {
      return (
        <div key={ind}>
            {book.bookId} <br />
            {book.bookName}
        </div>
     
     )
    })}



        </div>
    );
};

export default BookCard;