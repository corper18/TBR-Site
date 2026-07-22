import "../styles/BookCard.css";
import { Link } from "react-router-dom";
import { useState, usteState } from "react";

function BookCard({ book }) {

    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <div className="book-card">

            <button className={`heart-button ${isFavorite ? "active" : ""}`}
            onClick={() => setIsFavorite(!isFavorite)}
                >
                    {isFavorite ? "♥" : "♡"}
            </button>

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