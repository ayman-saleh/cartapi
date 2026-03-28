"use client";

import { useEffect, useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("/api/cart")
      .then((r) => r.json())
      .then((d) => setCart(d.cart));
  }, []);

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 32, fontFamily: "system-ui" }}>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.productId}>
              {item.productId} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
