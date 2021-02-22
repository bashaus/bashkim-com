interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const path: string;
  export default path;
  export const ReactComponent: SvgrComponent;
}
