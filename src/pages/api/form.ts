import { z } from "zod";
import type { NextApiRequest, NextApiResponse } from "next";

const schema = z.object({
  email: z.string().email(),
  body: z.string().max(500).min(10),
});

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = schema.parse(req.body);

    // Send to Discord webhook if configured
    if (DISCORD_WEBHOOK) {
      await fetch(DISCORD_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [
            {
              title: "New Contact Form Submission",
              color: 0x5865f2,
              fields: [
                {
                  name: "Email",
                  value: body.email,
                  inline: true,
                },
                {
                  name: "IP",
                  value: String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown"),
                  inline: true,
                },
                {
                  name: "Message",
                  value: body.body,
                },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
    }

    if (req.headers["content-type"] === "application/json") {
      return res.status(200).json({ sent: true });
    }

    return res.redirect(303, "/thanks");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }

    console.error(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
