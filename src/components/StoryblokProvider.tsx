'use client';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

const components = {
  // Add Components Here
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
