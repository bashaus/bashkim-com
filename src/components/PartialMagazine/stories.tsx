import React from "react";

import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PartialMagazine from ".";

export default {
  title: "Components/Magazine",
  decorators: [withKnobs],
};

export const Render = (): JSX.Element => {
  const spread = number("spread", 1, { min: 1, max: 3 });
  const pages = 4;

  return (
    <div
      style={{
        maxWidth: 600,
      }}
    >
      <PartialMagazine
        spread={spread}
        pages={pages}
        pageWidth={300}
        pageHeight={450}
        onInitialize={action("onInitialize")}
        onSpreadChange={action("onSpreadChange")}
      >
        {[...Array(pages).keys()].map((i) => (
          <li key={i}>
            <img
              src={`https://placehold.it/300x450?text=Page+${i + 1}`}
              alt={`Page ${i + 1}`}
              width={300}
              height={450}
            />
          </li>
        ))}
      </PartialMagazine>
    </div>
  );
};
