import React from 'react';

import LayoutDefault from '%components/LayoutDefault';
import MenuBackButtonHomeImpl from '%components/MenuBackButtonHomeImpl';

export default function BlogPage() {
  return (
    <LayoutDefault backButton={MenuBackButtonHomeImpl}>
      <section className="group">
        Blog page
      </section>
    </LayoutDefault>
  );
}
