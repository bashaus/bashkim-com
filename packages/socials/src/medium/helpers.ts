export function matchMultipartTitle(title: string) {
  const part = title.match(/^(\[(\d+)\/(\d+)\] )?(.+)$/);

  if (part?.[1]) {
    return {
      multipart: {
        part: part[2],
        parts: part[3],
      },
      title: part[4],
    };
  }

  return {
    multipart: undefined,
    title,
  };
}
