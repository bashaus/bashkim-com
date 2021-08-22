import { app } from "./app";

const { APP_SITEMAP_PORT = 3000 } = process.env;

app.listen(APP_SITEMAP_PORT, () => {
  console.log(`⚡️ Running at http://localhost:${APP_SITEMAP_PORT}`);
});
