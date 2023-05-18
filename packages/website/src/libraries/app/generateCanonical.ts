export const generateCanonical = (pathname: string) => {
  const { NEXT_PUBLIC_BASE_HREF: baseHref } = process.env;

  if (!pathname.startsWith("/")) {
    throw new Error(`pathname ${pathname} must start with a slash (/)`);
  }

  if (!pathname.endsWith("/")) {
    throw new Error(`pathname ${pathname} must end with a slash (/)`);
  }

  return `${baseHref}/${pathname}/`;
};
