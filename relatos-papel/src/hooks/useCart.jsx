import { useState, useEffect } from 'react';

const useCart = () => {
  // Inicializa items como un array vacío
  const [items, setItems] = useState([]);
  
  // Cargar carrito del localStorage al inicio
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
        setItems([]);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  // Función para añadir al carrito
  const addToCart = (product, quantity = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item => 
          item.id === product.id 
            ? {...item, quantity: item.quantity + quantity}
            : item
        );
      } else {
        return [...currentItems, {...product, quantity}];
      }
    });
  };

  // Función para eliminar del carrito
  const removeFromCart = (productId) => {
    setItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  // Función para actualizar cantidad
  const updateQuantity = (productId, quantity) => {
    setItems(currentItems => 
      currentItems.map(item => 
        item.id === productId 
          ? {...item, quantity}
          : item
      )
    );
  };

  // Función para limpiar carrito
  const clearCart = () => {
    setItems([]);
  };

  // Retorna un objeto con los items y funciones
  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
};

export default useCart;