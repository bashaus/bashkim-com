import { GoogleAnalytics } from "@next/third-parties/google";
import { z } from "zod";

const googleAnalyticsSchema = z.object({
  enabled: z.stringbool().default(false),
  gaId: z.string().optional(),
});

export default function GoogleAnalyticsTag() {
  const { enabled, gaId } = googleAnalyticsSchema.parse({
    enabled: process.env["GOOGLE_ANALYTICS_ENABLED"],
    gaId: process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"],
  });

  const isGoogleAnalyticsConfigured = enabled && !!gaId;
  if (!isGoogleAnalyticsConfigured) {
    return null;
  }

  return <GoogleAnalytics gaId={gaId} />;
}
