import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

const CartContext = createContext()
export const useCart = () => useContext(CartContext)

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    const exists = cart.find(p => p.id === item.id)

    if (exists) {
      setCart(
        cart.map(p =>
          p.id === item.id
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      )
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }

    toast.success("Added to cart 🛒")
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(p => p.id !== id))
    toast.error("Removed from cart ❌")
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}