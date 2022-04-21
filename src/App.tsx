// React
import { createContext, FC } from "react";

// Components
import ContentBlockOne from './components/organisms/ContentBlockOne'
import ContentBlockTwo from './components/organisms/ContentBlockTwo'
import ContentBlockThree from './components/organisms/ContentBlockThree'
import ContentBlockFour from './components/organisms/ContentBlockFour'
import ContentBlockFive from './components/organisms/ContentBlockFive'
import Footer from './components/organisms/Footer'
import Header from "./components/organisms/Header";

// Styled Components
import { globalStyles, theme } from "./lib/theme";

// Types
import { AppProps } from "./App.typescript";

export const CommentContext = createContext(false);

const App: FC<AppProps> = ({ setComments }) => {
  globalStyles();

  const { Provider: CommentProvider } = CommentContext;

  return (
    <CommentProvider value={setComments}>
      {setComments &&
        `<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: ${theme.colors.primary100}"><![endif]-->`}
      <Header />
      <ContentBlockOne />
      <ContentBlockTwo />
      <ContentBlockThree />
      <ContentBlockFour />
      <ContentBlockFive />
      <Footer />
      {setComments && `<!--[if (mso)|(IE)]></td></tr></table><![endif]-->`}
    </CommentProvider>
  );
};

export default App;
