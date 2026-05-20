import myTbrBooks from "../data/myTbrBooks";

function MyTBR({ searchQuery = ""}) {
     const filteredBooks = myTbrBooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
    return (
        <>
            <h2>My To Be Read Page</h2>

            <div className="book-container">
                {filteredBooks.map((book) => (
                    <div className="book" key={book.id}>
                        <img src={book.cover} alt={book.title}/>
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                        <p>{book.read ? "Read " : "Not read yet"}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MyTBR;