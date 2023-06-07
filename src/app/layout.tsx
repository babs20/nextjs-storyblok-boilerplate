import StoryblokProvider from '@/components/StoryblokProvider';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { Metadata } from 'next';
import '@/styles/main.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const components = {
  // Add Components Here
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'us', // or 'eu'
  },
  components,
});

export const metadata: Metadata = {
  title: 'Storyblok',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <head />
        <body className={inter.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
