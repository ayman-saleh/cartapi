import { NextResponse } from "next/server";
import { getCart, createOrder } from "@/lib/db";

export async function POST(request: Request) {
  const { name, email, phone, address } = await request.json();

  if (!name || !email || !phone || !address) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, phone, address" },
      { status: 400 }
    );
  }

  const cart = getCart();
  if (cart.length === 0) {
    return NextResponse.json(
      { error: "Cart is empty" },
      { status: 400 }
    );
  }

  const order = createOrder({ name, email, phone, address });

  // TODO: Send order confirmation SMS to customer

  return NextResponse.json({ order });
}
