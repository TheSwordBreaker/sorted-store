import { type AppType } from "next/dist/shared/lib/utils";

import "../styles/globals.css";
import "../styles/style.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
const queryClient = new QueryClient();

// EXTERNAL CSS
// https://cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.css
// EXTERNAL JAVASCRIPT
//cdnjs.cloudflare.com/ajax/libs/flickity/1.0.0/flickity.pkgd.js

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
