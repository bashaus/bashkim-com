export class TurnUnknownDisplayError extends Error {
  constructor({ display }: { display: string }) {
    super(`Unknown display: ${display}`);
  }
}
