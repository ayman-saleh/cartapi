# CartAPI

A simple e-commerce store with a shopping cart and checkout API. Built with Next.js.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Endpoints

- `GET /api/products` — List all products
- `GET /api/cart` — Get current cart
- `POST /api/cart` — Add item to cart `{ productId, quantity }`
- `POST /api/checkout` — Place an order `{ name, email, phone, address }`

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- In-memory data store (no database required)
