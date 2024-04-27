import { createContext, useState, useEffect } from 'react'

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])

  // Función para cargar los datos de las pizzas
  const loadPizzas = async () => {
    try {
      // Simulamos una llamada a una API o carga de datos
      const response = await fetch('/pizzas.json')
      const data = await response.json()
      setPizzas(data)
      console.log('context', data)
    } catch (error) {
      console.error('Error loading pizzas:', error)
    }
  }

  useEffect(() => {
    loadPizzas()
  }, [])

  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // Función para agregar una pizza al carrito
  const addToCart = pizza => {
    setCart([...cart, pizza])
  }

  // Función para remover una pizza del carrito
  const removeFromCart = pizzaId => {
    setCart(cart.filter(item => item.id !== pizzaId))
  }

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([])
  }

  return (
    <PizzaContext.Provider value={{ pizzas, cart, addToCart, removeFromCart, clearCart, formatPrice }}>
      {children}
    </PizzaContext.Provider>
  )
}
