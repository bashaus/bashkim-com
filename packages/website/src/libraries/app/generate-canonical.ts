export default function generateCanonical(pathname: string) {
  const { BASHKIM_COM_BASE_HREF = "https://www.bashkim.com" } = process.env;

  if (!pathname.startsWith("/")) {
    throw new Error(`pathname ${pathname} must start with a slash (/)`);
  }

  return `${BASHKIM_COM_BASE_HREF}${pathname}`;
}
