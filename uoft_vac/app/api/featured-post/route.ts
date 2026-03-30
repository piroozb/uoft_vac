import { NextResponse } from "next/server";

const INSTAGRAM_BUSINESS_ID = process.env.INSTAGRAM_BUSINESS_ID!;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN!;

const CACHE_INTERVAL = 4; // hours

export async function GET() {
    try {

        const res = await fetch(
            `https://graph.facebook.com/v19.0/${INSTAGRAM_BUSINESS_ID}/media` +
            `?fields=id,caption,media_type,media_url,thumbnail_url,timestamp,children{media_url,thumbnail_url}` +
            `&limit=1&access_token=${PAGE_ACCESS_TOKEN}`,
            { next: { revalidate: CACHE_INTERVAL * 3600 } }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch Instagram data");
        }

        const json = await res.json();
        const post = json.data[0];

        let images: string[] = [];
        let isReel = false;

        if (post.media_type === "CAROUSEL_ALBUM") {
            images = post.children.data.map(
                (c: any) => c.media_url ?? c.thumbnail_url
            );
        }
        else if (post.media_type === "VIDEO") {
            // Treat as reel
            images = [post.thumbnail_url];
            isReel = true;
        }
        else {
            images = [post.media_url];
        }

        return NextResponse.json({
            images,
            isReel,
            caption: post.caption ?? "",
            timestamp: post.timestamp,
        });

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}
