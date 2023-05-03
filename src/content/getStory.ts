import { getStoryblokApi } from "@storyblok/react"

export const getStory = async () => {
  const api = getStoryblokApi();
  const { data } = await api.get("/cdn/spaces/me/");

  return data as {
    space: {
      domain: string;
      id: number;
      language_codes: string[];
      name: string;
      version: number;
    }
  };
}
