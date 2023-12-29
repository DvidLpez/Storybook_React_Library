import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/config/global.styles';
import { lightTheme } from '../src/config/themes/light';
import { darkTheme } from '../src/config/themes/dark';

// import '../lib/config/fonts/styles.css';
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

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: "light",
    Provider: ThemeProvider, 
    GlobalStyles: GlobalStyles,
  }),
];

export default preview;
