"use client";

import Divider from "@mui/material/Divider";
import { AnimatePresence } from "motion/react";
import { useActionState, useEffect, useTransition } from "react";

import SocialMediumContent from "@/domains/socials-medium/SocialMediumContent";
import SocialMediumHeader from "@/domains/socials-medium/SocialMediumHeader";
import SocialMediumLoading from "@/domains/socials-medium/SocialMediumLoading";

import { animateMediumSocials } from "./action";

const initialState = null;

export default function SocialsMediumPage() {
  const [state, runAction] = useActionState(animateMediumSocials, initialState);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      runAction();
    });
  }, []);

  return (
    <>
      <SocialMediumHeader />
      <Divider />

      <AnimatePresence mode="wait">
        {isPending && <SocialMediumLoading key="loading" />}
        {!isPending && state !== null && (
          <SocialMediumContent key="content" articles={state?.articles} />
        )}
      </AnimatePresence>
    </>
  );
}
