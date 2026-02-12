import { NextResponse } from "next/server";

const INSTAGRAM_BUSINESS_ID = process.env.INSTAGRAM_BUSINESS_ID!;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN!;

const CACHE_INTERVAL = 4; // hours

export async function GET() {
  try {
    
    // Fetch data.
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${INSTAGRAM_BUSINESS_ID}/media` +
        `?fields=id,caption,media_type,media_url,timestamp,children{media_url}` +
        `&limit=1&access_token=${PAGE_ACCESS_TOKEN}`,
      { next: { revalidate: CACHE_INTERVAL * 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Instagram data");
    }

    const json = await res.json();
    const post = json.data[0];

    // Normalize images.
    let images: string[] = [];

    if (post.media_type === "CAROUSEL_ALBUM") {
      images = post.children.data.map((c: any) => c.media_url);
    } else {
      images = [post.media_url];
    }

    // Return images, caption, and timestamp.
    return NextResponse.json({
      images,
      caption: post.caption ?? "",
      timestamp: post.timestamp,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
