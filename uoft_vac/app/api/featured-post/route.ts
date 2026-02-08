import { NextResponse } from "next/server";

const INSTAGRAM_BUSINESS_ID = process.env.INSTAGRAM_BUSINESS_ID!;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN!;

export async function GET() {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${INSTAGRAM_BUSINESS_ID}/media` +
        `?fields=id,caption,media_type,media_url,children{media_url}` +
        `&limit=1&access_token=${PAGE_ACCESS_TOKEN}`,
      { next: { revalidate: 3600 } } // cache 1 hour
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Instagram data");
    }

    const json = await res.json();
    const post = json.data[0];

    // Normalize images
    let images: string[] = [];

    if (post.media_type === "CAROUSEL_ALBUM") {
      images = post.children.data.map((c: any) => c.media_url);
    } else {
      images = [post.media_url];
    }

    return NextResponse.json({
      images,
      caption: post.caption ?? "",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
