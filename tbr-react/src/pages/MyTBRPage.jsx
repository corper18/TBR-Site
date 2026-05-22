import myTbrBooks from "../data/myTbrBooks";
import BookCard from "../components/BookCard";
import "../styles/MyTBRPage.css";

function MyTBRPage({ searchQuery = ""}) {
     const filteredBooks = myTbrBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
    return (
        <>
            <h2>My To Be Read Page</h2>

            <div className="book-container">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </>
    );
}

export default MyTBRPage;