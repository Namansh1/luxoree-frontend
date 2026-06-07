//import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="hero">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        LUXOREE
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Luxury fragrances crafted for elegance & confidence
      </motion.p>

      <motion.div
        className="btn-group"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link to="/shop">
          <button className="btn primary">Explore Collection</button>
        </Link>

        <Link to="/cart">
          <button className="btn secondary">View Cart</button>
        </Link>
      </motion.div>

    </div>
  )
}