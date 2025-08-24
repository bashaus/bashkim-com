import { redirectToPreviewURL } from "@prismicio/next";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

import { prismicClient } from "@/libraries/prismic/client";

export async function GET(request: NextRequest) {
  revalidateTag("prismic");

  return await redirectToPreviewURL({ client: prismicClient, request });
}
