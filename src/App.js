import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";

import "./styles.css";
import AllBooks from "./pages/AllBooks";
import BookContext from "./contexts/BookContext";
import Nav from "./components/Nav";
import AddBooks from "./pages/AddBooks";

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", status: "Read" },
  { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", status: "Unread" },
  { id: 3, title: "The Alchemist", author: "Paulo Coelho", status: "Read" }
]

export default function App() {
  const[book, setBook] = useState(books)
  
  return (
    <div>
      <BookContext.Provider value={{book, setBook}}>
  <Router>
    <Nav />
    <Routes>
    <Route path="/" element={<AllBooks />} />
    <Route path="/addBooks" element={<AddBooks />} />
      </Routes>
    </Router>
    </BookContext.Provider>
    </div>
  );
}
