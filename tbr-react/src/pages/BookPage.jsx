import { useState } from "react";
import { useParams } from "react-router-dom";
import myTbrBooks from "../data/myTbrBooks";
import "../styles/BookPage.css";

function BookPage() {

    const { id } = useParams();

    const book = myTbrBooks.find(
        (book) => book.id === Number(id)
        
    );

    const [bookStatus, setBookStatus] = useState("want-to-read");

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
    
        <div className="book-page-actions">
            <label htmlFor="book-status">Reading status: </label>

            <select
            className="book-status-select"
            id="book-status"
            value={bookStatus}
            onChange={(e) => setBookStatus(e.target.value)}
            >
                <option value="want-to-read">Want to Read</option>
                <option value="currently-reading">Currently Reading</option>
                <option value="read">Read</option>
            </select>
        </div>
          <button>Favorite</button>

          
        </main>
    );

}

export default BookPage;