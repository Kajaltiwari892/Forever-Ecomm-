import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  if (!product) {
    return <div className="container mx-auto px-4 py-6">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start gap-10">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.category}</p>

        {/* Price */}
        <div className="flex items-center mt-3">
          <span className="text-2xl font-semibold text-blue-600">${product.price}</span>
          <span className="text-gray-500 line-through text-lg ml-3">
            ${(product.price * 1.3).toFixed(2)} {/* Mock original price */}
          </span>
        </div>

        {/* Color Selection */}
        <div className="mt-4">
          <p className="text-gray-700 font-medium">Color: {selectedColor}</p>
          <div className="flex gap-2 mt-2">
            <button
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === "Black" ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: "black" }}
              onClick={() => setSelectedColor("Black")}
            />
            <button
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === "Gray" ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: "gray" }}
              onClick={() => setSelectedColor("Gray")}
            />
          </div>
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <p className="text-gray-700 font-medium">Size:</p>
          <div className="flex gap-3 mt-2">
            {["XXS", "XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size ? "border-black font-bold" : "border-gray-300"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <a href="#" className="text-blue-500 text-sm mt-2 inline-block">
            Size Guide
          </a>
        </div>

        {/* Quantity Selector */}
        <div className="mt-6 flex items-center gap-4">
          <button
            className="bg-gray-200 px-3 py-2 rounded text-lg"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <span className="text-xl font-semibold">{quantity}</span>
          <button
            className="bg-gray-200 px-3 py-2 rounded text-lg"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        {/* CTA Button */}
        <button
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded text-lg font-semibold hover:bg-blue-700 transition"
          disabled={!selectedSize}
        >
          {selectedSize ? "Add to Cart" : "Select Size"}
        </button>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Description</h2>
          <p className="text-gray-700 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

