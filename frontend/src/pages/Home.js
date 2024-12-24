import React, { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products") // Replace with your API
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;