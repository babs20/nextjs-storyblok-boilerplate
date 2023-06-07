import { getStoryblokApi } from '@storyblok/react/rsc';

interface StoryData {
  space: {
    domain: string;
    id: number;
    language_codes: string[];
    name: string;
    version: number;
  };
}

export default async function Home() {
  const data = await getStory();
  if (!data) return null;

  return (
    <main className='container py-5'>
      <h1>Current Storyblok Space</h1>

      <dl className='mt-4 mb-0'>
        <dt>
          <b>Space Name</b>
        </dt>
        <dd>{data.space.name}</dd>

        <br />

        <dt>
          <b>Space ID</b>
        </dt>
        <dd>{data.space.id}</dd>

        <br />

        <dt>
          <b>Domain</b>
        </dt>
        <dd>{data.space.domain}</dd>
      </dl>
    </main>
  );
}

const getStory = async () => {
  try {
    const { data } = await getStoryblokApi().get('cdn/spaces/me/');
    return data as StoryData;
  } catch (error) {
    console.error(error);
  }
};
