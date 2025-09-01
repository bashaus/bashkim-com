"use client";

import Divider from "@mui/material/Divider";
import { AnimatePresence } from "motion/react";
import { useActionState, useEffect, useTransition } from "react";

import SocialMediumContent from "@/domains/socials-medium/components/SocialMediumContent";
import SocialMediumHeader from "@/domains/socials-medium/components/SocialMediumHeader";
import SocialMediumLoading from "@/domains/socials-medium/components/SocialMediumLoading";

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
          <SocialMediumContent key="content" series={state?.series} />
        )}
      </AnimatePresence>
    </>
  );
}
