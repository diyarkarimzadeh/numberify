import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"

import "@/styles/globals.css"
import { useState } from "react"
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>

        <Component {...pageProps} />

      </QueryClientProvider>
    </>
  )
}
