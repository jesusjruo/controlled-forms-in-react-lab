import { useState } from 'react';

const BookShelf = (props) => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
    
      const [newBook, setNewBook] = useState([
        { title: '', author: '' }
      ]);
    
      const handleChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        // Prevent default event behavior
        event.preventDefault();
        setBooks([...books , {title: newBook.title , author: newBook.author}]);
        setNewBook({
            title: '', 
            author: '',
          });
      };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit your book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book , index) => (
                    <div key={index} className='bookCard'>
                        <div>{book.title}</div>
                        <div><b>From: </b>{book.author}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookShelf;