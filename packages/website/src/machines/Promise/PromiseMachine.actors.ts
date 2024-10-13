import { PromiseActorLogic } from "xstate";

export enum PromiseMachineActor {
  FETCH = "PromiseMachineActor:FETCH",
}

export type PromiseMachineFetchActor = {
  src: PromiseMachineActor.FETCH;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logic: PromiseActorLogic<any, any>;
};

// eslint-disable-next-line sonarjs/redundant-type-aliases
export type PromiseMachineActorsType = PromiseMachineFetchActor;
