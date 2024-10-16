export const generateCanonical = (pathname: string) => {
  if (!pathname.startsWith("/")) {
    throw new Error(`pathname ${pathname} must start with a slash (/)`);
  }

  if (!pathname.endsWith("/")) {
    throw new Error(`pathname ${pathname} must end with a slash (/)`);
  }

  return `https://www.bashkim.com/${pathname}/`;
};
