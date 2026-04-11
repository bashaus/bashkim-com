import { handlers } from "@bashkim-com/prismic-dal/msw";
import { setupServer } from "msw/node";

const server = setupServer(...handlers);
server.listen();
