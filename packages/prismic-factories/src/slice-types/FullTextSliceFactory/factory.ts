import type { FullTextSliceTypeFragment } from "@bashkim-com/prismic-dal";
import { Factory } from "fishery";

const fullTextSliceFactory = Factory.define<FullTextSliceTypeFragment>(() => {
  return {
    type: "FullTextSliceType",
    label: null,
    primary: {
      full_text_slice_type_body: [
        {
          type: "heading3",
          text: "Heading Three",
          spans: [],
        },
        {
          type: "paragraph",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat at purus vel consequat. Mauris scelerisque mollis tellus. Suspendisse vel lacus finibus, elementum velit id, tincidunt odio. Etiam volutpat lorem id metus euismod, a suscipit diam tempor. Morbi vehicula mi in nisl blandit tempor. Morbi sit amet viverra neque. Integer nec diam pellentesque, lacinia sem sed, egestas neque. Integer finibus consequat eros, vel faucibus nisi venenatis feugiat. Ut congue eget tortor sit amet malesuada.Lorem ipsum dolar sit a met",
          spans: [],
        },
        {
          type: "paragraph",
          text: "Maecenas bibendum nibh eget risus ornare finibus. Aliquam nulla est, faucibus eget porttitor vel, suscipit ut libero. Ut iaculis dolor quis ex varius, ac facilisis erat finibus. Sed augue diam, convallis ac consequat eget, blandit interdum mauris. Cras odio nisi, vehicula non molestie aliquam, eleifend ac orci. Pellentesque lobortis sagittis nunc, nec tristique enim porta ut. Proin ac pretium est. In hac habitasse platea dictumst. Suspendisse eros tellus, facilisis ut ex eu, dignissim suscipit urna. Sed elit tellus, elementum ac nisi venenatis, venenatis maximus risus. Vestibulum facilisis bibendum magna. Maecenas semper in nulla nec venenatis. Fusce accumsan tincidunt urna a iaculis.Lorem ipsum dolar sit a met",
          spans: [],
        },
        {
          type: "paragraph",
          text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras elementum venenatis enim, ut auctor lectus venenatis ut. Nulla elit orci, mattis vitae maximus in, lacinia nec massa. Ut quam magna, euismod et vehicula ac, tincidunt sit amet magna. In vitae libero blandit, aliquam elit a, tincidunt urna. Ut turpis ligula, dapibus at sem elementum, aliquam finibus nulla. Aliquam eu nulla volutpat, efficitur magna ac, luctus sem. Nam vel lacinia libero, vitae placerat lorem. Aliquam placerat quis tortor ut commodo. Duis ut sapien imperdiet, hendrerit leo et, elementum mauris.Lorem ipsum dolar sit a met",
          spans: [],
        },
      ],
    },
  };
});

export default fullTextSliceFactory;
