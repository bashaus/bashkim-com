import { handlers as prismicHandlers } from "@bashkim-com/prismic-dal/mock";
import { handlers as socialsHandlers } from "@bashkim-com/socials/mock";
import { setupServer } from "msw/node";

const server = setupServer(...prismicHandlers, ...socialsHandlers);
server.listen();
