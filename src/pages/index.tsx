import MainLayout from '@/components/MainLayout';
import { getStory } from '@/content/getStory';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import Head from 'next/head';

// === Static Props === //
export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['story'], getStory);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// === Layout === //
Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}

// === Home Page === //
export default function Home() {
  const { data } = useQuery(['story'], getStory);

  if (!data) return null;

  return (
    <>
      <Head>
        <title>{data.space.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-5">
        <h1>Current Storyblok Space</h1>

        <dl className="mt-4 mb-0">
          <dt><b>Space Name</b></dt>
          <dd>{data.space.name}</dd>

          <br />

          <dt><b>Space ID</b></dt>
          <dd>{data.space.id}</dd>

          <br />

          <dt><b>Domain</b></dt>
          <dd>{data.space.domain}</dd>
        </dl>
      </main>
    </>
  )
}
