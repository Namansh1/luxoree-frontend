import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, removeFromCart } = useCart()
  const navigate = useNavigate()

  const total = (cart || []).reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  )

  const sendWhatsAppOrder = () => {
    if (!cart.length) return alert("Cart is empty")

    let message = "🛍️ *LUXOREE QUICK ORDER*\n\n"

    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.name} x ${item.qty || 1} = ₹${
        item.price * (item.qty || 1)
      }\n`
    })

    message += `\n💰 Total: ₹${total}`

    const phone = "918619499422"

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    )
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <p>Qty: {item.qty || 1}</p>
            <p>₹{item.price * (item.qty || 1)}</p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

      {/* WHATSAPP BUTTON BACK IN CART */}
      <button
        style={{ background: "#25D366", color: "#fff" }}
        onClick={sendWhatsAppOrder}
      >
        🟢 Order via WhatsApp
      </button>

      {/* GO TO CHECKOUT */}
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  )
}