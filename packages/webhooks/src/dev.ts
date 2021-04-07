import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const { APP_WEBHOOKS_PORT } = process.env;

app.listen(APP_WEBHOOKS_PORT, () => {
  console.log(`⚡️ Running at https://localhost:${APP_WEBHOOKS_PORT}`);
});
