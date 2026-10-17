import Link from 'next/link';
import React from 'react';


const getBooks = async() => {
    const res = await fetch ('http://localhost:3000/booksData.json')
    const data = await res.json();
    return data;
}

const BookCard = async() => {
    const booksdata = await getBooks();
    return (

        <div className='grid grid-cols-3  container mx-auto gap-4'>
    {booksdata.map((book, ind)=> {
      return (
        <div className='w-54  p-3 mx-2 my-2 border border-amber-700 bg-amber-200 rounded-xl text-cyan-700' key={ind}>
            <p className='text-center'>#BOOK ID-{book.bookId}</p>
            <p>{book.bookName}</p>
            <p>{book.author}</p>
           < Link href= {`/DetailsPage/${book.bookId}`} className='p-1 mx-5 my-5 bg-green-600 rounded-3xl text-cyan-200'>View Details</Link>
        </div>
     
     )
    })}



        </div>
    );
};

export default BookCard;