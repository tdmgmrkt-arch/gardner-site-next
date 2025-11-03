import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const banners = await prisma.bannerAd.findMany({
      include: { company: true },
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(banners)
  } catch (err) {
    console.error("Error fetching ads analytics:", err)
    return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 })
  }
}
