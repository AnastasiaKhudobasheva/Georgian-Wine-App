import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import { Toaster } from "sonner";
import Navigation from "@/components/layout/Navigation";
// import { Space_Grotesk, League_Spartan } from "next/font/google";

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// const leagueSpartan = League_Spartan({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

export default function App({ Component, pageProps }) {
  return (
    // <div className={leagueSpartan.className}>
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
