import { app } from "./app";

const { APP_WEBHOOKS_PORT = 3000 } = process.env;

app.listen(APP_WEBHOOKS_PORT, () => {
  console.log(`⚡️ Running at http://localhost:${APP_WEBHOOKS_PORT}`);
});
