import { NextResponse } from "next/server";
import { db } from "../../../config/db";

export async function GET(request, { params }) {
  try {
    const result = await db.query("SELECT * FROM spots WHERE id = ?", [
      params.id,
    ]);
    return NextResponse.json(result[0]);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(request, { params }) {
  try {
    await db.query("DELETE FROM spots WHERE id = ?", [params.id]);
    return NextResponse.json({}, { status: 204 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(request, { params }) {
  const data = await request.json();

  try {
    await db.query("UPDATE spots SET ? WHERE id = ?", [data, params.id]);
    return NextResponse.json({
      ...data,
      id: params.id,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}