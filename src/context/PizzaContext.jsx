import { createContext, useState, useEffect } from 'react'

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

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

  useEffect(() => {
    setTotal(calculateTotal())
  }, [cart])

  // formatea el valor del total
  const formatPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  // Calcula el total del valor de todas las pizzas en el carrito
  const calculateTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * (pizza.quantity || 1),
      0
    )
  }

  const updateQuantity = (pizzaId, newQuantity) => {
    setCart(prevCart => {
      return prevCart.map(pizza => {
        if (pizza.id === pizzaId) {
          return { ...pizza, quantity: newQuantity }
        }
        return pizza
      })
    })
  }
  // Función para agregar una pizza al carrito
  const addToCart = pizzaToAdd => {
    const existingPizzaIndex = cart.findIndex(
      pizza => pizza.id === pizzaToAdd.id
    )

    if (existingPizzaIndex !== -1) {
      // Si la pizza ya está en el carrito, actualiza su cantidad
      const updatedCart = cart.map((pizza, index) => {
        if (index === existingPizzaIndex) {
          return {
            ...pizza,
            quantity: pizza.quantity + (pizzaToAdd.quantity || 1)
          }
        }
        return pizza
      })
      setCart(updatedCart)
    } else {
      // Si la pizza no está en el carrito, agrégala
      setCart([...cart, pizzaToAdd])
    }
    // Actualiza la cantidad total en el carrito
    setTotalQuantity(prevQuantity => prevQuantity + (pizzaToAdd.quantity || 1))
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
    <PizzaContext.Provider
      value={{
        pizzas,
        cart,
        total,
        totalQuantity,
        calculateTotal,
        updateQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        formatPrice
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}
