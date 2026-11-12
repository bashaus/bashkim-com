// yaml.d.ts
declare module "*.yaml" {
  const messages: Record<string, Record<string, string>>;
  export default messages;
}
