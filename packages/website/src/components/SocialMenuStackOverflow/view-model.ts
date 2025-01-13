import { useMachine } from "@xstate/react";
import { useCallback } from "react";
import { fromPromise } from "xstate";

import { PromiseMachineActor } from "../../machines/Promise/PromiseMachine.actors";
import { PromiseMachineFetchEvent } from "../../machines/Promise/PromiseMachine.events";
import promiseMachine from "../../machines/Promise/PromiseMachine.machine";
import { PromiseMachineState } from "../../machines/Promise/PromiseMachine.state";
import getStackOverflowSocialsAction from "./actions";

export const useSocialMenuStackOverflowViewModel = () => {
  const [promiseMachineState, promiseMachineSend] = useMachine(
    promiseMachine.provide({
      actors: {
        [PromiseMachineActor.FETCH]: fromPromise(async () => {
          return getStackOverflowSocialsAction();
        }),
      },
    }),
  );

  const handleOpen = useCallback(() => {
    if (promiseMachineState.value === PromiseMachineState.IDLE) {
      promiseMachineSend(PromiseMachineFetchEvent());
    }
  }, [promiseMachineState.value, promiseMachineSend]);

  return {
    handleOpen,
    promiseMachineState,
    promiseMachineSend,
  };
};
