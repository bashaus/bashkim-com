import { handlers } from "@bashkim-com/prismic-msw";
import { setupServer } from "msw/node";

const server = setupServer(...handlers);
server.listen();
