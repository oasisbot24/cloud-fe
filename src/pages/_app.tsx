import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAtom } from "jotai";
import { jwtDecode } from "jwt-decode";
import { SnackbarProvider } from "notistack";
import authAtom from "@/datas/auth";
import "@/styles/custom.css";
import "@/styles/font/font-sans.css";
import "@/styles/font/font-sfp.css";
import "@/styles/globals.css";
import "@/styles/liquid.scss";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [, setAuth] = useAtom(authAtom);

  useEffect(() => {
    const credential = localStorage.getItem("credential");
    if (credential) setAuth(jwtDecode(credential));
    else router.push("/");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <SnackbarProvider />
      <CssBaseline />
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ""}
      >
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
