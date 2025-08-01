import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { Toaster } from "sonner";
import Navigation from "@/components/layout/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
      <Toaster position="bottom-right" closeButton />
    </SWRConfig>
  );
}
