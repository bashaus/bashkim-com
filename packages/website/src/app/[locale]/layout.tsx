import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

import { getLocaleFromPath } from "@/i18n/locale/source/path/get";

export type LocaleLayoutProps = Readonly<PropsWithChildren>;

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  await getLocaleFromPath().catch(() => notFound());
  return children;
}
