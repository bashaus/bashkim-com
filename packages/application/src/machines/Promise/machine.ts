import { Machine } from "xstate";

import { PromiseContext } from "%machines/Promise/context";
import { PromiseEvent, PromiseEvents } from "%machines/Promise/events";
import { PromiseService } from "%machines/Promise/services";
import { PromiseState } from "%machines/Promise/states";

export const PromiseMachineName = "PromiseMachine";

export const PromiseMachine = Machine<PromiseContext, PromiseEvents>({
  id: PromiseMachineName,
  initial: PromiseState.INIT,
  states: {
    [PromiseState.INIT]: {
      on: {
        [PromiseEvent.FETCH]: PromiseState.FETCHING,
      },
    },
    [PromiseState.FETCHING]: {
      invoke: {
        src: PromiseService.FETCH,
        onDone: { target: PromiseState.RESOLVED },
        onError: { target: PromiseState.REJECTED },
      },
    },
    [PromiseState.RESOLVED]: {
      type: "final",
    },
    [PromiseState.REJECTED]: {
      type: "final",
    },
  },
});
