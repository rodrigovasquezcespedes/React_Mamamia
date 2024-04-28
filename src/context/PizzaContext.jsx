import { createContext, useState, useEffect } from 'react'

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  // lama al json
  const loadPizzas = async () => {
    try {
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

  // Calcula el total
  const calculateTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * (pizza.quantity || 1),
      0
    )
  }

  //  actualizar la cantidad de un artículo
  const handleQuantityChange = (event, pizzaId) => {
    const newQuantity = parseInt(event.target.value)
    setCart(prevCart => {
      return prevCart.map(pizza => {
        if (pizza.id === pizzaId) {
          return { ...pizza, quantity: newQuantity }
        }
        return pizza
      })
    })
  }

  // agrega una pizza al carrito
  const addToCart = pizzaToAdd => {
    const existingPizzaIndex = cart.findIndex(
      pizza => pizza.id === pizzaToAdd.id
    )

    if (existingPizzaIndex !== -1) {
      // Si la pizza se repite, actualiza la cantidad
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
      // Si la pizza no está en el carrito la agrégala
      setCart([...cart, pizzaToAdd])
    }
    // Actualiza la cantidad total en el carrito
    setTotalQuantity(prevQuantity => prevQuantity + (pizzaToAdd.quantity || 1))
  }

  // elimina la pizza del carrito
  const removeFromCart = pizzaId => {
    setCart(cart.filter(item => item.id !== pizzaId))
  }

  // limpia el arreglo del carrito
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
        handleQuantityChange,
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
