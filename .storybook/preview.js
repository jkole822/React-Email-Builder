import { globalStyles } from '../src/lib/theme'
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const App = (Story) => {
  globalStyles();

  return <Story />;
};

export const decorators = [App];
