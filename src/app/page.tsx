import { products } from "@/lib/db";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
      {/* Hero */}
      <section style={{
        padding: "80px 0 60px",
        borderBottom: "1px solid var(--border)",
      }}>
        <p style={{ fontSize: 12, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
          Developer Hardware
        </p>
        <h1 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
          Gear that ships<br />as fast as your code.
        </h1>
        <p style={{ marginTop: 16, fontSize: 16, color: "var(--muted)", maxWidth: 420 }}>
          Premium peripherals for developers. Mechanical keyboards, noise-cancelling headphones, and the tools you actually use.
        </p>
      </section>

      {/* Products */}
      <section style={{ padding: "48px 0" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 24,
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              overflow: "hidden",
              transition: "border-color 0.15s",
            }}>
              {/* Product image placeholder */}
              <div style={{
                height: 200,
                background: "linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
              }}>
                {product.id === "prod_001" ? "🎧" :
                 product.id === "prod_002" ? "🔌" :
                 product.id === "prod_003" ? "⌨️" : "📷"}
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.4, marginBottom: 16 }}>
                  {product.description}
                </p>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                  <span style={{ fontSize: 20, fontWeight: 700 }}>
                    ${product.price.toFixed(2)}
                  </span>
                  <AddToCartButton productId={product.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function AddToCartButton({ productId }: { productId: string }) {
  return (
    <form action={`/api/cart`} method="POST">
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="quantity" value="1" />
      <button type="submit" style={{
        background: "var(--fg)",
        color: "var(--bg)",
        border: "none",
        padding: "8px 16px",
        borderRadius: 6,
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
      }}>
        Add to Cart
      </button>
    </form>
  );
}
