import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, number, select } from "@storybook/addon-knobs";

import { ComponentDecorator } from "%storybook/decorators/component";

import { Turn, TurnDisplay } from ".";

export default {
  title: "Components/Turn",
  decorators: [withKnobs, ComponentDecorator],
};

export const Render = (): JSX.Element => {
  const center = boolean("center", false);
  const display = select("display", ["single", "double"], "double");
  const pages = number("pages", 6, { min: 1, max: 100 });
  const page = number("page", 1, { min: 1, max: 4 });
  const pagesArray = new Array(pages).fill("").map((_value, index) => index);

  return (
    <div style={{ maxWidth: 800 }}>
      <Turn
        center={center}
        display={display as TurnDisplay}
        page={page}
        pages={pages}
        pageWidth={300}
        pageHeight={450}
        onInitialize={action("onInitialize")}
        onPageChange={action("onPageChange")}
      >
        {pagesArray.map((i) => (
          <li key={i}>
            <img
              src={`https://via.placeholder.com/300x450?text=Page+${i + 1}`}
              alt={`Page ${i + 1}`}
            />
          </li>
        ))}
      </Turn>
    </div>
  );
};
