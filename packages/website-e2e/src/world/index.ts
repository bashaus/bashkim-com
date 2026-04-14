import {
  IWorldOptions,
  setDefaultTimeout,
  setWorldConstructor,
  World,
} from "@cucumber/cucumber";
import { BrowserContext, Page } from "@playwright/test";

import { E2EParameters, e2eParametersSchema } from "./parameters";

export class E2EWorld extends World<E2EParameters> {
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions<E2EParameters>) {
    const parameters = e2eParametersSchema.parse(options.parameters);
    super({ ...options, parameters });
  }
}

setWorldConstructor(E2EWorld);
setDefaultTimeout(30 * 1000);
