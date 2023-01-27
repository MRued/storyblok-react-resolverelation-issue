import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Global = ({ blok }) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.globalref ? (
        <StoryblokComponent blok={blok.globalref.content} key={blok._uid} />
      ) : null}
    </main>
  );
};
export default Global;
