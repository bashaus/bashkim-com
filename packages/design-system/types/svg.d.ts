declare module "*.svg" {
  import type { StatelessComponent, SVGAttributes } from "react";
  export const ReactComponent: StatelessComponent<SVGAttributes<SVGElement>>;
  const value: string;
  export default value;
}
