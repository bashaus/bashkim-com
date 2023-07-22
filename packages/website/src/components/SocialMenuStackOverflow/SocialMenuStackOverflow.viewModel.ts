import { useGetStackOverflowSocialsLazyQuery } from "@bashkim-com/socials-dal";
import { useMachine } from "@xstate/react";
import { useCallback } from "react";

import { socialsClient } from "../../libraries/socials/SocialsClient";
import { PromiseMachineAction } from "../../machines/Promise/PromiseMachine.action";
import { promiseMachine } from "../../machines/Promise/PromiseMachine.machine";
import { PromiseMachineService } from "../../machines/Promise/PromiseMachine.service";
import { PromiseMachineState } from "../../machines/Promise/PromiseMachine.state";

export const useSocialMenuStackOverflowViewModel = () => {
  const [getSocials] = useGetStackOverflowSocialsLazyQuery({
    client: socialsClient,
  });

  const [promiseMachineState, promiseMachineSend] = useMachine(promiseMachine, {
    services: {
      [PromiseMachineService.FETCH]: async (/* _, e */) => {
        const result = await getSocials();
        return result.data.getStackOverflowSocials;
      },
    },
  });

  const handleOpen = useCallback(() => {
    if (promiseMachineState.value === PromiseMachineState.IDLE) {
      promiseMachineSend(PromiseMachineAction.FETCH);
    }
  }, [promiseMachineState.value, promiseMachineSend]);

  return {
    handleOpen,
    promiseMachineState,
    promiseMachineSend,
  };
};
