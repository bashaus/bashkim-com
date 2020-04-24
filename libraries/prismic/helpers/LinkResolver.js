const PrismicLinkResolver = (doc) => {
  switch (doc.type) {
    case 'case_study':
      return `/portfolio/${doc.uid}`;

    default:
      return '/';
  }
};

export default PrismicLinkResolver;
