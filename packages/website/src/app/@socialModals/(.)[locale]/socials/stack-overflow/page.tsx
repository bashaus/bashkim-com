"use client";

import { AnimatePresence } from "motion/react";
import { useActionState, useEffect, useTransition } from "react";

import SocialStackOverflowContent from "@/domains/socials-stack-overflow/components/SocialStackOverflowContent";
import SocialStackOverflowLoading from "@/domains/socials-stack-overflow/components/SocialStackOverflowLoading";

import { animateStackOverflowSocials } from "./action";

const initialState = null;

export default function SocialsStackOverflowPage() {
  const [state, runAction] = useActionState(
    animateStackOverflowSocials,
    initialState,
  );
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      runAction();
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isPending && <SocialStackOverflowLoading key="loading" />}
      {!isPending && state !== null && (
        <SocialStackOverflowContent
          key="content"
          posts={state.posts}
          user={state.user}
        />
      )}
    </AnimatePresence>
  );
}
