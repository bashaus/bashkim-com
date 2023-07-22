export type PromiseMachineContext = {
  retries: number;
  response?: any;
};

export const initialPromiseMachineContext: PromiseMachineContext = {
  retries: 0,
  response: undefined,
};
