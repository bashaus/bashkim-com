import { geolocation } from "@vercel/functions";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const details = geolocation(request);
  return Response.json({
    geolocation: details,
    headers: {
      "X-Vercel-IP-Country": request.headers.get("X-Vercel-IP-Country"),
      "X-Vercel-IP-Country-Region": request.headers.get(
        "X-Vercel-IP-Country-Region",
      ),
      "X-Vercel-IP-City": request.headers.get("X-Vercel-IP-City"),
    },
    negotiator: new Negotiator({
      headers: Object.fromEntries(request.headers.entries()),
    }).languages(),
  });
}
