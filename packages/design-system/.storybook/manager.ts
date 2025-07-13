import { addons, type State } from "storybook/manager-api";

const docStories = ["home--home"];

addons.setConfig({
  layoutCustomisations: {
    showToolbar(state: State, defaultValue: boolean) {
      return docStories.includes(state.storyId) ? false : defaultValue;
    },
  },
});
