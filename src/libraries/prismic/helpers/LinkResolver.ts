const PrismicLinkResolver = (doc: { type: string; uid: string }): string => {
  switch (doc.type) {
    case 'case_study':
      return `/portfolio/${doc.uid}`;

    default:
      return '/';
  }
};

export default PrismicLinkResolver;
