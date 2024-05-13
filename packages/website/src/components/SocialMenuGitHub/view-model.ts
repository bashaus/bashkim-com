import { useGetGitHubSocialsLazyQuery } from "@bashkim-com/socials-dal";
import { useMachine } from "@xstate/react";
import { useCallback } from "react";
import { fromPromise } from "xstate";

import { socialsClient } from "../../libraries/socials/SocialsClient";
import { PromiseMachineActor } from "../../machines/Promise/PromiseMachine.actors";
import { PromiseMachineFetchEvent } from "../../machines/Promise/PromiseMachine.events";
import { promiseMachine } from "../../machines/Promise/PromiseMachine.machine";
import { PromiseMachineState } from "../../machines/Promise/PromiseMachine.state";

export const useSocialMenuGitHubViewModel = () => {
  const [getSocials] = useGetGitHubSocialsLazyQuery({
    client: socialsClient,
  });

  const [promiseMachineState, promiseMachineSend] = useMachine(
    promiseMachine.provide({
      actors: {
        [PromiseMachineActor.FETCH]: fromPromise(async () => {
          const result = await getSocials();
          return result.data.getGitHubSocials;
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
