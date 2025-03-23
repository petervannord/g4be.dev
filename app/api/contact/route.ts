import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Your Discord webhook URL (keep this secret!)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: "Webhook URL is missing" },
        { status: 500 }
      );
    }

    // Create the payload for Discord
    const payload = {
      username: "Contact Form Bot",
      avatar_url: "https://i.imgur.com/zxvQFAS.png", // Optional bot avatar
      content: `📩 **New Contact Form Submission**
      **Name:** ${name}
      **Email:** ${email}
      **Subject:** ${subject}
      **Message:** ${message}`,
    };

    // Send data to Discord webhook
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!discordResponse.ok) {
      throw new Error("Failed to send message to Discord.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
