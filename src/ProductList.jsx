import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Air Purifying",
    price: 15,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying",
    price: 20,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400"
  },
  {
    id: 3,
    name: "Spider Plant",
    category: "Air Purifying",
    price: 12,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c2f5?w=400"
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Air Purifying",
    price: 10,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 5,
    name: "Boston Fern",
    category: "Air Purifying",
    price: 18,
    image: "https://images.unsplash.com/photo-1597055181300-e3633a917e0c?w=400"
  },
  {
    id: 6,
    name: "Rubber Plant",
    category: "Air Purifying",
    price: 22,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 7,
    name: "Monstera",
    category: "Decorative",
    price: 25,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400"
  },
  {
    id: 8,
    name: "Fiddle Leaf Fig",
    category: "Decorative",
    price: 30,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 9,
    name: "Calathea",
    category: "Decorative",
    price: 19,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400"
  },
  {
    id: 10,
    name: "Bird of Paradise",
    category: "Decorative",
    price: 35,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  },
  {
    id: 11,
    name: "Chinese Evergreen",
    category: "Decorative",
    price: 21,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 12,
    name: "Dracaena",
    category: "Decorative",
    price: 24,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400"
  },
  {
    id: 13,
    name: "Jade Plant",
    category: "Succulents",
    price: 12,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400"
  },
  {
    id: 14,
    name: "Echeveria",
    category: "Succulents",
    price: 9,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  },
  {
    id: 15,
    name: "Haworthia",
    category: "Succulents",
    price: 11,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 16,
    name: "String of Pearls",
    category: "Succulents",
    price: 16,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400"
  },
  {
    id: 17,
    name: "Zebra Plant",
    category: "Succulents",
    price: 14,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400"
  },
  {
    id: 18,
    name: "Panda Plant",
    category: "Succulents",
    price: 13,
    image: "https://images.unsplash.com/photo-1597055181300-e3633a917e0c?w=400"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((p) => p.category))];

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="product-page">
      <nav className="shop-navbar">
        <Link to="/" className="shop-logo">
            🌿 Paradise Nursery
        </Link>

        <div>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">🛒 Cart ({cartCount})</Link>
        </div>
      </nav> 

      <h1>Our Houseplants</h1>

      {categories.map((category) => (
        <section key={category} id="plants">
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const added = cartItems.some(
                  (item) => item.id === product.id
                );

                return (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addItem(product))}
                    >
                      {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
