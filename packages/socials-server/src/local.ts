import "./dotenv";

import { startStandaloneServer } from "@apollo/server/standalone";

import { app } from "./app";

const { APP_SOCIALS_SERVER_PORT = 4300 } = process.env;

(async () => {
  const { url } = await startStandaloneServer(app, {
    listen: { port: +APP_SOCIALS_SERVER_PORT },
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
