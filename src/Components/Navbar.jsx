import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <div className="nav">
      
      {/* LOGO CLICK FIX */}
      <h2 onClick={() => navigate("/")} className="logo">
        LUXOREE
      </h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  )
}