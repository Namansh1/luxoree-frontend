import { useState } from "react";
import { useCart } from "../Context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = (cart || []).reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0,
  );

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    let message = `🛍️ *NEW ORDER - LUXOREE*\n\n`;

    message += `👤 Name: ${name}\n`;
    message += `📞 Phone: ${phone}\n`;
    message += `🏠 Address: ${address}\n\n`;

    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.name} x ${item.qty || 1} = ₹${
        item.price * (item.qty || 1)
      }\n`;
    });

    message += `\n💰 Total: ₹${total}\n`;
    message += `\n📦 Please confirm order`;

    const adminNumber = "918619499422";

    window.open(
      `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        placeholder="Full Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="card">
        <h3>Total Items: {cart.length}</h3>
        <h2>Total: ₹{total}</h2>
      </div>

      <button
        style={{ background: "#25D366", color: "white" }}
        onClick={placeOrder}
      >
        🟢 Place Order on WhatsApp
      </button>
    </div>
  );
}
