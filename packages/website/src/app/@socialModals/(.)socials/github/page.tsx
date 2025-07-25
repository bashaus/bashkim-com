"use client";

import Divider from "@mui/material/Divider";
import { AnimatePresence } from "motion/react";
import { useActionState, useEffect, useTransition } from "react";

import SocialGitHubContent from "@/domains/socials-github/SocialGitHubContent";
import SocialGitHubHeader from "@/domains/socials-github/SocialGitHubHeader";
import SocialGitHubLoading from "@/domains/socials-github/SocialGitHubLoading";

import { animateGitHubSocials } from "./action";

const initialState = null;

export default function SocialsGitHubPage() {
  const [state, runAction] = useActionState(animateGitHubSocials, initialState);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      runAction();
    });
  }, []);

  return (
    <>
      <SocialGitHubHeader />
      <Divider />

      <AnimatePresence mode="wait">
        {isPending && <SocialGitHubLoading key="loading" />}
        {!isPending && state !== null && (
          <SocialGitHubContent
            key="content"
            pinnedItems={state?.pinnedItems ?? []}
            repositoryCount={state?.repositoryCount ?? 0}
          />
        )}
      </AnimatePresence>
    </>
  );
}
