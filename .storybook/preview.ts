import type { Preview } from "@storybook/react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import '../lib/config/fonts/styles.css';
const preview: Preview = {
  parameters: {
    actions: { 
      argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
