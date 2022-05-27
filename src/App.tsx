// React
import { createContext, FC } from "react";

// Components
import { ContentBlockOne } from "./components/organisms/ContentBlockOne";
import { ContentBlockTwo } from "./components/organisms/ContentBlockTwo";
import { Footer } from "./components/organisms/Footer";
import { Header } from "./components/organisms/Header";

// Types
import { AppProps } from "./types";

export const CommentContext = createContext(false);

const App: FC<AppProps> = ({ setComments }) => {
  const { Provider: CommentProvider } = CommentContext;

  return (
    <CommentProvider value={setComments}>
      <Header />
      <ContentBlockOne />
      <ContentBlockTwo />
      <Footer />
    </CommentProvider>
  );
};

export default App;
