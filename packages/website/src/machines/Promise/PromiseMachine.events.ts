export enum PromiseMachineEvent {
  FETCH = "PromiseMachineEvent:FETCH",
  RESOLVE = "PromiseMachineEvent:RESOLVE",
  REJECT = "PromiseMachineEvent:REJECT",
  RETRY = "PromiseMachineEvent:RETRY",
}

/* PromiseMachineEvent.FETCH */

// eslint-disable-next-line sonarjs/redundant-type-aliases
export type PromiseMachineFetchParamsType = unknown;

export type PromiseMachineFetchEventType = {
  type: PromiseMachineEvent.FETCH;
  params: PromiseMachineFetchParamsType;
};

export const PromiseMachineFetchEvent = (
  params: PromiseMachineFetchParamsType = {},
): PromiseMachineFetchEventType => ({
  type: PromiseMachineEvent.FETCH,
  params,
});

/* PromiseMachineEvent.RESOLVE */

// eslint-disable-next-line sonarjs/redundant-type-aliases
export type PromiseMachineResolveParamsType = unknown;

export type PromiseMachineResolveEventType = {
  type: PromiseMachineEvent.RESOLVE;
  params: PromiseMachineResolveParamsType;
};

export const PromiseMachineResolveEvent = (
  params: PromiseMachineResolveParamsType = {},
): PromiseMachineResolveEventType => ({
  type: PromiseMachineEvent.RESOLVE,
  params,
});

/* PromiseMachineEvent.REJECT */

// eslint-disable-next-line sonarjs/redundant-type-aliases
export type PromiseMachineRejectParamsType = unknown;

export type PromiseMachineRejectEventType = {
  type: PromiseMachineEvent.REJECT;
  params: PromiseMachineRejectParamsType;
};

export const PromiseMachineRejectEvent = (
  params: PromiseMachineRejectParamsType = {},
): PromiseMachineRejectEventType => ({
  type: PromiseMachineEvent.REJECT,
  params,
});

/* PromiseMachineEvent.RETRY */

// eslint-disable-next-line sonarjs/redundant-type-aliases
export type PromiseMachineRetryParamsType = unknown;

export type PromiseMachineRetryEventType = {
  type: PromiseMachineEvent.RETRY;
  params: PromiseMachineRetryParamsType;
};

export const PromiseMachineRetryEvent = (
  params: PromiseMachineRetryParamsType = {},
): PromiseMachineRetryEventType => ({
  type: PromiseMachineEvent.RETRY,
  params,
});

/* PromiseMachineEventsType */

export type PromiseMachineEventsType =
  | PromiseMachineFetchEventType
  | PromiseMachineResolveEventType
  | PromiseMachineRejectEventType
  | PromiseMachineRetryEventType;
