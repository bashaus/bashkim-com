import React from "react";
import ComponentDecorator from "%storybook/decorators/component";

import Carousel from ".";

export default {
  title: "Components/Carousel",
  decorators: [ComponentDecorator],
};

export const Render = (): JSX.Element => {
  const slideStyle = {
    width: "100%",
    height: 400,
  };

  return (
    <div
      style={{
        maxWidth: 600,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <Carousel>
        <div style={slideStyle}>Slide 1</div>

        <div style={slideStyle}>
          Slide 2
          <br />
          Two
        </div>

        <div style={slideStyle}>Slide 3</div>
      </Carousel>
    </div>
  );
};
