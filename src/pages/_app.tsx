import '@/styles/main.scss';
import { apiPlugin, storyblokInit } from "@storyblok/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { ReactElement, ReactNode, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

const components = {
  // Add Components Here
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  bridge: true,
  apiOptions: {
    region: "us", // or 'eu'
  },
  components,
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [queryClient] = useState(() => new QueryClient())

  return (
    <div className={ inter.className }>
      <QueryClientProvider client={ queryClient }>
        <Hydrate state={ pageProps.dehydratedState }>
          { getLayout((
            <Component { ...pageProps } />
          )) }
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}

