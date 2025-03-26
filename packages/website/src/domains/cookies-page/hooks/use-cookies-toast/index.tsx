import { useEffect } from "react";
import { toast } from "react-toastify";

import { getCookiesAccepted } from "../../actions/get-cookies-accepted";
import { setCookiesAccepted } from "../../actions/set-cookies-accepted";
import CookiesToast from "../../components/CookiesToast";

export function useCookiesToast() {
  useEffect(() => {
    (async () => {
      const isCookiesAccepted = await getCookiesAccepted();
      if (isCookiesAccepted) {
        return;
      }

      toast(CookiesToast, {
        onClose: setCookiesAccepted,
        autoClose: false,
      });
    })();
  });
}
