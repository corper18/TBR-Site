import { useState } from "react";
import myTbrBooks from "../data/myTbrBooks";

function MyTBR() {
    const [books, setBooks] = useState(myTbrBooks);

    const toggleRead = (id) => {
        setBooks(
            boo
        )
    }
    return (
        <>
        <h2>My To Be Read Page</h2>

        <div className="book-container">
            {myTbrBooks.map((book) => (
                <div className="book" key={book.id}>
                    <img src={book.cover} alt={book.title}/>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.read ? "read ✅" : "Not read yet"}</p>
                </div>
            ))}
        </div>
        </>
    );
}

export default MyTBR;