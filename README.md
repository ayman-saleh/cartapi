# ByteGear

**Developer hardware store.** Premium peripherals for developers — keyboards, headphones, hubs, and more.

Built with Next.js 15, TypeScript, and in-memory storage.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/cart` | Get current cart items |
| POST | `/api/cart` | Add item `{ productId, quantity }` |
| POST | `/api/checkout` | Place order `{ name, email, phone, address }` |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Storage:** In-memory (resets on deploy)
- **Deploy:** Vercel

## Products

- Wireless Headphones — $79.99
- USB-C Hub — $49.99
- Mechanical Keyboard — $129.99
- Webcam HD — $59.99
