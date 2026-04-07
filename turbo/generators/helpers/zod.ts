import { prettifyError, z } from "zod";

export function zodValidator(schema: z.ZodType) {
  return async function (value: string) {
    try {
      await schema.parseAsync(value);
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        return prettifyError(err);
      }

      throw err;
    }
  };
}
