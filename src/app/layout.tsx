import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CartAPI Store",
  description: "Simple e-commerce store with cart and checkout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
