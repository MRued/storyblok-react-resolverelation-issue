import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok, storyData, stories }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body
        ? blok.body.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  );
};
export default Page;
