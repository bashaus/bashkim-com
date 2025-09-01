import { useEffect } from "react";
import { toast } from "react-toastify";

import { getCookiesAccepted } from "@/domains/cookies-page/actions/get-cookies-accepted";
import { setCookiesAccepted } from "@/domains/cookies-page/actions/set-cookies-accepted";
import CookiesToast from "@/domains/cookies-page/components/CookiesToast";

export function useCookiesToast() {
  useEffect(() => {
    (async () => {
      const isCookiesAccepted = await getCookiesAccepted();
      if (isCookiesAccepted) {
        return;
      }

      toast(CookiesToast, {
        onClose: () => {
          setCookiesAccepted();
        },
        autoClose: false,
      });
    })();
  });
}
