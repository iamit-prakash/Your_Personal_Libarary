import BookContext from "../contexts/BookContext"
import {useContext, useState} from "react"

export default function AddBooks(){
    const {book, setBook} = useContext(BookContext)

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        status: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()

        const newBook = {
            id: Date.now(),
            title: formData.title,
            author: formData.author,
            status: formData.status,
        }

        setBook([...book, newBook])

        setFormData({
            title: "",
            author: "",
            status: ""
        });

        setMessage("Book added successfully.")
    }
    
    return(
        <div className="container">
        <h2 className="mb-2">Add Book: </h2> 
        <form onSubmit={handleSubmit}>
           <input
           type="text"
           name="title"
           placeholder="Enter Title"
           className="form-control mb-3"
           value={formData.title}
           onChange={handleChange}
           required
            /> 

       <input
          type="text"
          name="author"
          placeholder="Enter Author"
          className="form-control mb-3"
          value={formData.author}
          onChange={handleChange}
          required
        />


       <select
          name="status"
          className="form-select mb-3"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="">Select Status</option>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
        </select>

        <button className="btn btn-success">
          Add Book
        </button>
            </form>

            {message && (
                <p className="text-success mt-3">
                    {message}
                    </p>
            )}
            </div>
    )
}