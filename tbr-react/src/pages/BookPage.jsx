import { useParams } from "react-router-dom";
import myTbrBooks from "../data/myTbrBooks";
import "./BookPage.css";

function BookPage() {

    const { id } = useParams();

    const book = myTbrBooks.find(
        (book) => book.id === Number(id)
    );

    if (!book) {
        return <p>Book not found</p>
    }

    return(
        <main className="book-page">

        <img className="book-page-cover"
            src={book.cover}
            alt={book.title}
        />

        <h1>{book.title}</h1>
        <p>{book.author}</p>
    
        <button>Want to Read</button>
        <button>Currently Reading</button>
        <button>Read</button>
        <button>Favorite</button>

        </main>
    );

}

export default BookPage;