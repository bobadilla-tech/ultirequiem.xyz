import { z } from "zod";
import type { NextApiRequest, NextApiResponse } from "next";

const schema = z.object({
  email: z.string().email(),
  body: z.string().max(500).min(10),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = schema.parse(req.body);

    // Form submission validated successfully
    console.log("Form submission:", {
      email: body.email,
      body: body.body,
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    });

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
