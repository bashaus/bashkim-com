export type PromiseMachineContextType = {
  retries: number;
  response?: any;
};

export const initialPromiseMachineContext: PromiseMachineContextType = {
  retries: 0,
  response: undefined,
};
