export function pathAsUrl(pathname: string) {
  const { BASHKIM_COM_BASE_HREF: baseHref = "https://www.bashkim.com" } =
    process.env;

  if (!pathname.startsWith("/")) {
    throw new Error(`pathname ${pathname} must start with a slash (/)`);
  }

  const url = new URL(pathname, baseHref);
  return url.toString();
}
