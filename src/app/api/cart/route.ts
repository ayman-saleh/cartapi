import { NextResponse } from "next/server";
import { getCart, addToCart } from "@/lib/db";

export async function GET() {
  return NextResponse.json({ cart: getCart() });
}

export async function POST(request: Request) {
  const { productId, quantity } = await request.json();

  if (!productId || typeof quantity !== "number" || quantity < 1) {
    return NextResponse.json(
      { error: "Invalid request. Provide productId and quantity." },
      { status: 400 }
    );
  }

  const cart = addToCart(productId, quantity);
  return NextResponse.json({ cart });
}
