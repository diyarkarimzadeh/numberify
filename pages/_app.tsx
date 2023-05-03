import { Inter as FontSans } from '@next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

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
