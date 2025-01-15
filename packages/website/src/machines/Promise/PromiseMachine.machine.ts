import { assign, createMachine } from "xstate";

import {
  PromiseMachineActor,
  PromiseMachineActorsType,
} from "./PromiseMachine.actors";
import {
  initialPromiseMachineContext,
  PromiseMachineContextType,
} from "./PromiseMachine.context";
import {
  PromiseMachineEvent,
  PromiseMachineEventsType,
} from "./PromiseMachine.events";
import { PromiseMachineState } from "./PromiseMachine.state";

const promiseMachine = createMachine({
  id: "PromiseMachine",
  initial: PromiseMachineState.IDLE,
  context: initialPromiseMachineContext,
  types: {} as {
    context: PromiseMachineContextType;
    events: PromiseMachineEventsType;
    actors: PromiseMachineActorsType;
  },
  states: {
    [PromiseMachineState.IDLE]: {
      on: {
        [PromiseMachineEvent.Fetch]: PromiseMachineState.LOADING,
      },
    },

    [PromiseMachineState.LOADING]: {
      invoke: {
        src: PromiseMachineActor.FETCH,
        onDone: {
          target: PromiseMachineState.SUCCESS,
          actions: assign({
            response: ({ event }) => event.output,
          }),
        },
        onError: {
          target: PromiseMachineState.FAILURE,
          actions: assign({
            response: () => null,
          }),
        },
      },
    },

    [PromiseMachineState.SUCCESS]: {
      type: "final",
    },

    [PromiseMachineState.FAILURE]: {
      on: {
        [PromiseMachineEvent.Retry]: {
          target: PromiseMachineState.LOADING,
          actions: assign({
            retries: ({ context }) => context.retries + 1,
          }),
        },
      },
    },
  },
});

export default promiseMachine;
