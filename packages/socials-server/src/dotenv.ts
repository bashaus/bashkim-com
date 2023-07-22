import { config } from "dotenv";
import path from "path";

const root = path.resolve(`${__dirname}/../../../`);

config({ path: path.join(root, ".env") });
config({ path: path.join(root, ".env.local") });
