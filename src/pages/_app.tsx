import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAtom } from "jotai";
import { SnackbarProvider } from "notistack";
import authAtom from "@/datas/auth";
import exchangeAtom from "@/datas/exchange";
import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";
import useModalGlobal from "@/hooks/useModalGlobal";
import "@/styles/custom.css";
import "@/styles/font/font-sans.css";
import "@/styles/font/font-sfp.css";
import "@/styles/globals.css";
import "@/styles/liquid.scss";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { push, pathname } = useRouter();
  const [, setExchange] = useAtom(exchangeAtom);
  const [, setAuth] = useAtom(authAtom);
  const { modal, closeModal } = useModalGlobal();
  const { userExchangeQuery } = useUserExchangesQuery(queryClient);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) setAuth(JSON.parse(auth));
    else push("/");

    const exchange = localStorage.getItem("exchange");
    if (exchange) {
      if (exchange === "okx") setExchange("okx");
      else if (exchange === "upbit") setExchange("upbit");
      else localStorage.removeItem("exchange");
    }
    if (exchange && pathname === "/") push("/dashboard");
  }, []);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MODE === "development") return;
    if (pathname === "/") return;
    if (pathname.includes("/api-connection")) return;
    if (pathname.includes("/subscribe")) return;
    if (pathname.includes("/mypage")) return;
    if (pathname.includes("/payment")) return;
    const { data } = userExchangeQuery;
    if (!data || data.length === 0) push("/api-connection");
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <SnackbarProvider />
      <CssBaseline />
      <GoogleOAuthProvider
        clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ""}
      >
        <ThemeProvider theme={theme}>
          {modal && (
            <Box
              className="fixed z-[99] top-0 left-0 w-screen h-screen bg-[#00000033] flex items-center justify-center"
              onClick={() => {
                closeModal();
              }}
            >
              <Box
                onClick={e => {
                  e.stopPropagation();
                }}
              >
                {modal}
              </Box>
            </Box>
          )}
          <Component {...pageProps} />
        </ThemeProvider>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}
