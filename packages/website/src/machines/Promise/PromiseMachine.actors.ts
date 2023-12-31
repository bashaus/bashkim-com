import { PromiseActorLogic } from "xstate";

export enum PromiseMachineActor {
  FETCH = "PromiseMachineActor:FETCH",
}

export type PromiseMachineFetchActor = {
  src: PromiseMachineActor.FETCH;
  logic: PromiseActorLogic<any, any>;
};

export type PromiseMachineActorsType = PromiseMachineFetchActor;
