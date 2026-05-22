import "../styles/BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div className="book-card">
            <Link to ={`/books/${book.id}`}>
                <img className="book-cover"
                    src={book.cover}
                    alt={book.title}
                />
            </Link>

            <div className="book-card-info">
                <Link to ={`/books/${book.id}`}>
                    <p className="book-card-title">
                        {book.title}
                    </p>
                </Link>

            </div>
        </div>
    );
}

export default BookCard;