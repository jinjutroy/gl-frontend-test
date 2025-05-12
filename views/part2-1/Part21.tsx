import { Sandpack } from "@codesandbox/sandpack-react";
import ExpandCollapse from "../../components/expand-collapse/ExpandCollapse";

export default function Part21() {
  return (
    <div>
      <p className="text-lg mb-4">
        1. Write a JavaScript function that takes an array of objects
        representing products (each object should have properties like "name,"
        "price," and "quantity") and returns the total value of all products in
        the array, applying a discount if the quantity is greater than 5.
      </p>
      <ExpandCollapse>
        <Sandpack
          template="react"
          theme="dark"
          options={{
            wrapContent: true,
            showLineNumbers: false,
            editorWidthPercentage: 30,
            editorHeight: 800,
            resizablePanels: true,
          }}
          files={{
            "/App.js": {
              code: `
  import React, { useState } from "react";
  import "./style.css";
  
  const discount = 10; // 10% discount
  
  // Function to calculate the total value of products and apply discount when quantity > 5
  function getTotalValue(products) {
    return products.reduce(
      (totals, { price, quantity }) => {
        const base = price * quantity;
        const discounted = quantity > 5 ? base * 0.9 : base;
  
        totals.baseTotal += base;
        totals.discountedTotal += discounted;
  
        return totals;
      },
      { baseTotal: 0, discountedTotal: 0 }
    );
  }
  
  export default function App() {
    const [products, setProducts] = useState([
      { name: "Laptop", price: 1000, quantity: 2 },
      { name: "Mouse", price: 25, quantity: 6 },
      { name: "Monitor", price: 300, quantity: 1 },
    ]);
  
    const handleAdd = () => {
      const newProduct = {
        name: "Test Product",
        price: Math.floor(Math.random() * 100 + 20),
        quantity: Math.floor(Math.random() * 10 + 1),
      };
      setProducts([...products, newProduct]);
    };
  
    const total = getTotalValue(products);
  
    return (
      <div className="container">
        <h1>Product List</h1>
        <i> Note: If quantity &gt; 5, a <strong>10%</strong> discount will be applied automatically. </i>
        <br />
        <div className="product-list">
          {products.map((p, i) => {
            const basePrice = p.price * p.quantity;
            const discountedPrice = p.quantity > 5 ? basePrice * 0.9 : basePrice;
            return (
              <div className="product" key={i}>
                <span>{p.name} (x{p.quantity})</span>
                <span>
                  {p.quantity > 5 ? <s>{basePrice.toFixed(0)} USD</s>:<></>} {discountedPrice.toFixed(0)} USD
                </span>
              </div>
            );
          })}
        </div>
        <div className="total"> 
          <div><strong>Total Value:</strong> {total.discountedTotal.toFixed(0)} USD</div>
        </div>
        <button onClick={handleAdd} className="add-btn">Add Product</button>
      </div>
    );
  }
  `,
            },
            "/style.css": {
              code: `
  body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    margin: 0;
    padding: 20px;
  }
  
  .container {
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
  }
  
  .product {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  
  .product span s {
    color: red;
    margin-right: 10px;
    opacity: 0.6;
    font-size: 0.9em;
  }
  
  .total {
    text-align: right;
    font-size: 1.2em;
    margin-top: 20px;
  }
  .add-btn {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
            `.trim(),
              hidden: true,
            },
            "/index.js": {
              code: `
  import React from "react";
  import { createRoot } from "react-dom/client";
  import App from "./App";
  
  const root = createRoot(document.getElementById("root"));
  root.render(<App />);
            `.trim(),
              hidden: true,
            },
          }}
        />
      </ExpandCollapse>
    </div>
  );
}
