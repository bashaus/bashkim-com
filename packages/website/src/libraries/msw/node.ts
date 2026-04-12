import { handlers } from "@bashkim-com/prismic-dal/mock";
import { setupServer } from "msw/node";

const server = setupServer(...handlers);
server.listen();
