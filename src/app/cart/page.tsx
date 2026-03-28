"use client";

import { useEffect, useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

const PRODUCT_MAP: Record<string, Product> = {
  prod_001: { id: "prod_001", name: "Wireless Headphones", price: 79.99 },
  prod_002: { id: "prod_002", name: "USB-C Hub", price: 49.99 },
  prod_003: { id: "prod_003", name: "Mechanical Keyboard", price: 129.99 },
  prod_004: { id: "prod_004", name: "Webcam HD", price: 59.99 },
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cart")
      .then((r) => r.json())
      .then((d) => setCart(d.cart))
      .finally(() => setLoading(false));
  }, []);

  const total = cart.reduce((sum, item) => {
    const product = PRODUCT_MAP[item.productId];
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 32 }}>
        Your Cart
      </h1>

      {loading ? (
        <p style={{ color: "var(--muted)", fontSize: 14 }}>Loading...</p>
      ) : cart.length === 0 ? (
        <div style={{ textAlign: "center", padding: "64px 0" }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>🛒</p>
          <p style={{ color: "var(--muted)", fontSize: 15 }}>Your cart is empty</p>
          <a href="/" style={{
            display: "inline-block",
            marginTop: 16,
            padding: "10px 20px",
            background: "var(--fg)",
            color: "var(--bg)",
            borderRadius: 6,
            fontSize: 13,
            fontWeight: 600,
          }}>
            Browse Products
          </a>
        </div>
      ) : (
        <>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {cart.map((item) => {
              const product = PRODUCT_MAP[item.productId];
              if (!product) return null;
              return (
                <div key={item.productId} style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                }}>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600 }}>{product.name}</p>
                    <p style={{ fontSize: 13, color: "var(--muted)" }}>Qty: {item.quantity}</p>
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700 }}>
                    ${(product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 0",
            borderBottom: "1px solid var(--border)",
          }}>
            <p style={{ fontSize: 16, fontWeight: 600 }}>Total</p>
            <p style={{ fontSize: 24, fontWeight: 800 }}>${total.toFixed(2)}</p>
          </div>

          <div style={{ marginTop: 24 }}>
            <button style={{
              width: "100%",
              padding: "14px",
              background: "var(--fg)",
              color: "var(--bg)",
              border: "none",
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
            }}>
              Checkout
            </button>
            <p style={{
              textAlign: "center",
              marginTop: 8,
              fontSize: 12,
              color: "var(--muted)",
            }}>
              Secure checkout. We&apos;ll text you a confirmation.
            </p>
          </div>
        </>
      )}
    </main>
  );
}
