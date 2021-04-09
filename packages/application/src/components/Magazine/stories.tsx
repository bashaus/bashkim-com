import { withKnobs, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ComponentDecorator from "%storybook/decorators/component";

import Magazine from ".";

export default {
  title: "Components/Magazine",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => {
  const spread = number("spread", 1, { min: 1, max: 3 });
  const pages = 4;
  const pagesArrray = new Array(pages).fill("").map((_value, index) => index);

  return (
    <div
      style={{
        maxWidth: 600,
        width: "100%",
      }}
    >
      <Magazine
        spread={spread}
        pages={pages}
        pageWidth={300}
        pageHeight={450}
        onInitialize={action("onInitialize")}
        onSpreadChange={action("onSpreadChange")}
      >
        {pagesArrray.map((i) => (
          <li key={i}>
            <img
              src={`https://placehold.it/300x450?text=Page+${i + 1}`}
              alt={`Page ${i + 1}`}
              width={300}
              height={450}
            />
          </li>
        ))}
      </Magazine>
    </div>
  );
};
