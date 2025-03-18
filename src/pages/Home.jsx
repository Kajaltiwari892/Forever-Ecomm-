import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
     
      cart[existingIndex].quantity += 1;
    } else {
    
      cart.push({ ...product, quantity: 1 });
    }

  
    localStorage.setItem('cart', JSON.stringify(cart));

   
    navigate('/cart');
  };

  return (
    
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm flex-grow">
              {product.description.substring(0, 100)}...
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">${product.price}</span>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
