export enum PromiseMachineEvent {
  Fetch = "Fetch",
  Resolve = "Resolve",
  Reject = "Reject",
  Retry = "Retry",
}

/* PromiseMachineEvent.Fetch */

export type PromiseMachineFetchParamsType = undefined;

export type PromiseMachineFetchEventType = {
  type: PromiseMachineEvent.Fetch;
  params: PromiseMachineFetchParamsType;
};

export const PromiseMachineFetchEvent = (
  params: PromiseMachineFetchParamsType = undefined,
): PromiseMachineFetchEventType => ({
  type: PromiseMachineEvent.Fetch,
  params,
});

/* PromiseMachineEvent.Resolve */

export type PromiseMachineResolveParamsType = undefined;

export type PromiseMachineResolveEventType = {
  type: PromiseMachineEvent.Resolve;
  params: PromiseMachineResolveParamsType;
};

export const PromiseMachineResolveEvent = (
  params: PromiseMachineResolveParamsType = undefined,
): PromiseMachineResolveEventType => ({
  type: PromiseMachineEvent.Resolve,
  params,
});

/* PromiseMachineEvent.Reject */

export type PromiseMachineRejectParamsType = undefined;

export type PromiseMachineRejectEventType = {
  type: PromiseMachineEvent.Reject;
  params: PromiseMachineRejectParamsType;
};

export const PromiseMachineRejectEvent = (
  params: PromiseMachineRejectParamsType = undefined,
): PromiseMachineRejectEventType => ({
  type: PromiseMachineEvent.Reject,
  params,
});

/* PromiseMachineEvent.Retry */

export type PromiseMachineRetryParamsType = undefined;

export type PromiseMachineRetryEventType = {
  type: PromiseMachineEvent.Retry;
  params: PromiseMachineRetryParamsType;
};

export const PromiseMachineRetryEvent = (
  params: PromiseMachineRetryParamsType = undefined,
): PromiseMachineRetryEventType => ({
  type: PromiseMachineEvent.Retry,
  params,
});

/* PromiseMachineEventsType */

export type PromiseMachineEventsType =
  | PromiseMachineFetchEventType
  | PromiseMachineResolveEventType
  | PromiseMachineRejectEventType
  | PromiseMachineRetryEventType;
