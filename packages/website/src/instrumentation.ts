export async function register() {
  if (process.env["NEXT_RUNTIME"] === "nodejs") {
    if (process.env["MSW_ENABLED"] === "1") {
      await import("@/libraries/msw/node");
    }
  }
}
