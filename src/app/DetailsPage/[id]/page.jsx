import booksData from "../../../../public/booksData.json";


const getBooks = async() => {
    const res = await fetch ('http://localhost:3000/booksData.json')
    const data = await res.json();
    return data;
}


const IndividualBook = async ({ params }) => {
  const { id } = await params;
const x = await getBooks();
  const book = x.find(
    (item) => item.bookId == (id)
  );

  return <div>{book.bookName} <br />
           {book.author}
           
  </div>;
};

export default IndividualBook;