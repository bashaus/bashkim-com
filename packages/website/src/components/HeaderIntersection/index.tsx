import { useCallback, useEffect, useRef } from "react";

import { NavigationActionSetScrollAtTop } from "@/domains/navigation/actions";
import { useNavigation } from "@/domains/navigation/context";

import { HeaderIntersectionVariant } from "./interfaces";
import * as S from "./styles";

export type HeaderIntersectionProps = Readonly<{
  variant: keyof HeaderIntersectionVariant;
}>;

export default function HeaderIntersection({
  variant,
}: HeaderIntersectionProps) {
  const { navigationDispatch } = useNavigation();
  const ref = useRef<HTMLDivElement>(null);

  const processIntersectionEntries = useCallback(
    (entries: Array<IntersectionObserverEntry>): void => {
      entries.forEach((entry) =>
        navigationDispatch(
          NavigationActionSetScrollAtTop({
            scrollAtTop: entry.isIntersecting,
          }),
        ),
      );
    },
    [navigationDispatch],
  );

  useEffect(() => {
    if (typeof IntersectionObserver === typeof undefined) {
      return (): void => {
        /* IntersectionObserver not supported */
      };
    }

    const interactionObserver = new IntersectionObserver(
      processIntersectionEntries,
    );

    const { current } = ref;

    if (current) {
      interactionObserver.observe(current);
    }

    return (): void => {
      if (current) {
        interactionObserver.unobserve(current);
      }
    };
  }, [processIntersectionEntries]);

  const VariantComponent = S.variantCompanyMap[variant];

  return <VariantComponent ref={ref} />;
}
