import BookContext from "../contexts/BookContext"
import { useContext, useState } from "react"

export default function AllBooks(){
   const {book, setBook} = useContext(BookContext)

   const [filter, setFilter] = useState("All")

   const toggleStatus = (id) => {
      setBook(
         book.map((item) => 
         item.id === id ? {
            ...item,
            status: item.status === "Read" ? "Unread" : "Read"
         } : item
      )
      );
   };

const deleteBook = (id) => {
   setBook(
      book.filter(item => item.id !== id)
   )
}

const readCount = book.filter((item) => item.status === "Read").length;

const unreadCount = book.filter(
    (item) => item.status === "Unread"
  ).length;

const filteredBooks = 
filter === "Read"
? book.filter((item) => item.status === "Read")
: filter === "Unread"
? book.filter((item) => item.status === "Unread")
: book;
   
   return (
    <div className="container">
      <div className="mb-4">
         <button className="btn btn-outline-primary me-2" onClick={() => setFilter("All")}> All Books ({book.length}) </button>
         <button className="btn btn-outline-success me-2" onClick={() => setFilter("Read")}> Read Books ({readCount}) </button>
         <button className="btn btn-outline-info me-2" onClick={() => setFilter("Unread")}> Unread Books ({unreadCount}) </button>
         </div>
        {
         filteredBooks.map(item => (
            <div key={item.id}>
             <h2>{item.title}</h2>
             <p>Author: {item.author} </p>
             <button className="btn btn-primary me-2" onClick={ () => toggleStatus(item.id)}>{item.status}</button>
             <button className="btn btn-primary" onClick={() => deleteBook(item.id)}>Delete This Book</button>
             <hr />
               </div>
         ))
        }
        </div>
   )
}