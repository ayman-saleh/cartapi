import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteGear — Developer Hardware Store",
  description: "Premium gear for developers. Keyboards, headphones, hubs, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--surface)",
        }}>
          <div style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <a href="/" style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-0.03em" }}>
              ByteGear
            </a>
            <div style={{ display: "flex", gap: 24, alignItems: "center", fontSize: 14 }}>
              <a href="/" style={{ color: "var(--muted)" }}>Products</a>
              <a href="/cart" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                background: "var(--fg)",
                color: "var(--bg)",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
              }}>
                Cart
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 0",
          marginTop: 80,
          textAlign: "center",
          fontSize: 12,
          color: "var(--muted)",
        }}>
          © 2026 ByteGear. Demo store for Chronicle integration testing.
        </footer>
      </body>
    </html>
  );
}
