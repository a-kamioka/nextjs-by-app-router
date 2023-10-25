import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../config/db';

export async function GET() {
  try {
    const results = await db.query("SELECT * FROM spots;")
    return NextResponse.json(results)
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { id, name, lat, lng} = await request.json();
    const result: any = await db.query("INSERT INTO spots SET ?", {
      name,
      lat,
      lng
    })
    return NextResponse.json({ id: result.insertId, name, lat, lng });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
