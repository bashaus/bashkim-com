export enum PromiseEvent {
  FETCH = "PromiseEvent:FETCH",
}

export type PromiseFetchEvent = {
  type: PromiseEvent.FETCH;
  payload: {
    src: string;
  };
};

export type PromiseEvents = PromiseFetchEvent;
