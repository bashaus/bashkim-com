declare module "*.svg" {
  import type { StatelessComponent, SVGAttributes } from "react";
  const value: StatelessComponent<SVGAttributes<SVGElement>>;
  export default value;
}
