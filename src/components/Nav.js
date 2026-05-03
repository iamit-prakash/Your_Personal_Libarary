import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container py-4 d-flex align-items-start">
      <h1 className="nav-logo">Your Personal Libarary</h1>

      <nav className="ms-auto">
      <ul className="nav">
       <li className="nav-item">
       <Link  className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
       <Link className="nav-link" to="/addBooks">Add Books</Link>
        </li>
          </ul>
      </nav>
    </div>
  );
}