export default function HomePage() {
  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 32, fontFamily: "system-ui" }}>
      <h1>CartAPI Store</h1>
      <p>A simple store with a cart and checkout API.</p>
      <h2>Products</h2>
      <ul>
        <li>Wireless Headphones — $79.99</li>
        <li>USB-C Hub — $49.99</li>
        <li>Mechanical Keyboard — $129.99</li>
        <li>Webcam HD — $59.99</li>
      </ul>
      <h2>API</h2>
      <ul>
        <li><code>GET /api/products</code></li>
        <li><code>GET /api/cart</code></li>
        <li><code>POST /api/cart</code></li>
        <li><code>POST /api/checkout</code></li>
      </ul>
    </main>
  );
}
