declare module "cache-manager-sqlite" {
  import type { Store } from "cache-manager";

  const x: Store;
  export const create: () => Store;
  export default x;
}
