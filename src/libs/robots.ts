import React from "react";

import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res
    .status(200)
    .send(
      process.env.NEXT_PUBLIC_MODE === "development"
        ? "User-agent: *\nDisallow: /"
        : "User-agent: *\nAllow: /",
    );
}

export default handler;
