import { assign, createMachine } from "xstate";

import { PromiseMachineAction } from "./PromiseMachine.action";
import { initialPromiseMachineContext } from "./PromiseMachine.context";
import { PromiseMachineService } from "./PromiseMachine.service";
import { PromiseMachineState } from "./PromiseMachine.state";

export const promiseMachine = createMachine({
  id: "PromiseMachine",
  initial: PromiseMachineState.IDLE,
  context: initialPromiseMachineContext,
  predictableActionArguments: true,
  states: {
    [PromiseMachineState.IDLE]: {
      on: {
        [PromiseMachineAction.FETCH]: PromiseMachineState.LOADING,
      },
    },

    [PromiseMachineState.LOADING]: {
      invoke: {
        src: PromiseMachineService.FETCH,
        onDone: {
          target: PromiseMachineState.SUCCESS,
          actions: assign({
            response: (_, event) => event.data,
          }),
        },
        onError: {
          target: PromiseMachineState.FAILURE,
          actions: assign({
            response: () => "",
          }),
        },
      },
    },

    [PromiseMachineState.SUCCESS]: {
      type: "final",
    },

    [PromiseMachineState.FAILURE]: {
      on: {
        [PromiseMachineAction.RETRY]: {
          target: PromiseMachineState.LOADING,
          actions: assign({
            retries: (context /*, event */) => context.retries + 1,
          }),
        },
      },
    },
  },
});
