export default function Page() {
  return (
    <main className="pt-24">
      여긴 메인데이터가 들어갈 예정입니다.
    </main>
  );
}

/*
"use client";
import { useEffect, useState } from 'react';

// This is your page component
export default function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch products when component mounts
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

// This function fetches products from your backend
async function getProducts() {
  // Replace this URL with the URL to your backend
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

*/