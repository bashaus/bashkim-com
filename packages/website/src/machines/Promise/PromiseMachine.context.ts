export type PromiseMachineContextType = {
  retries: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response?: any;
};

export const initialPromiseMachineContext: PromiseMachineContextType = {
  retries: 0,
  response: undefined,
};
