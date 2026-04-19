declare module "vitest" {
  interface CustomMatchers<R = unknown> {
    toMatchSchema(schema: z.ZodType): Promise<R>;
  }
}
