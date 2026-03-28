import type { Product, CartItem, Order } from "./types";

export const products: Product[] = [
  {
    id: "prod_001",
    name: "Wireless Headphones",
    price: 79.99,
    description: "Noise-cancelling over-ear headphones with 30-hour battery life.",
    image: "/headphones.jpg",
  },
  {
    id: "prod_002",
    name: "USB-C Hub",
    price: 49.99,
    description: "7-in-1 USB-C hub with HDMI, USB-A, SD card, and ethernet.",
    image: "/hub.jpg",
  },
  {
    id: "prod_003",
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "Compact 75% mechanical keyboard with hot-swappable switches.",
    image: "/keyboard.jpg",
  },
  {
    id: "prod_004",
    name: "Webcam HD",
    price: 59.99,
    description: "1080p webcam with auto-focus and built-in microphone.",
    image: "/webcam.jpg",
  },
];

let cart: CartItem[] = [];
const orders: Order[] = [];

export function getProducts(): Product[] {
  return products;
}

export function getCart(): CartItem[] {
  return cart;
}

export function addToCart(productId: string, quantity: number): CartItem[] {
  const existing = cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  return cart;
}

export function clearCart(): void {
  cart = [];
}

export function createOrder(customer: Order["customer"]): Order {
  const total = cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + (product?.price ?? 0) * item.quantity;
  }, 0);

  const order: Order = {
    id: `order_${Date.now()}`,
    items: [...cart],
    total,
    customer,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };

  orders.push(order);
  clearCart();
  return order;
}

export function getOrders(): Order[] {
  return orders;
}
