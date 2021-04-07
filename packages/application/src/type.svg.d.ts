declare module "*.svg" {
  const path: string;
  export default path;
  export const ReactComponent: React.StatelessComponent<React.SVGAttributes<
    SVGElement
  >>;
}
