import { PlopTypes } from "@turbo/gen";

import initGenerator from "./init/generator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  initGenerator(plop);
}
