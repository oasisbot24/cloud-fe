import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ""}
    >
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
