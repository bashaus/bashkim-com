export default function generateCanonical(pathname: string) {
  const { APP_BASE_HREF } = process.env;

  if (!pathname.startsWith("/")) {
    throw new Error(`pathname ${pathname} must start with a slash (/)`);
  }

  return `${APP_BASE_HREF}${pathname}`;
}
