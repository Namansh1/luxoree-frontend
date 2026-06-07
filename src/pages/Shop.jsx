import { motion } from "framer-motion"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

export default function Shop() {
  const { addToCart } = useCart()

  return (
    <div>
      <h2 className="title">✨ Luxury Collection</h2>

      <div className="grid">
        {(products || []).map((p, i) => (
          <motion.div
            className="card"
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{p.name}</h3>
            <p>{p.tag}</p>
            <h4>₹{p.price}</h4>

            {/* ONLY CART BUTTON */}
            <button onClick={() => addToCart(p)}>
              Add to Cart 🛒
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}