import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

const relationsResolvers = ["Global.globalref", "ServicSidebar.pages"];

export default function Page({ story }) {
  story = useStoryblokState(story, {
    resolveRelations: relationsResolvers,
  });

  return (
    <div>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps({
  locale,
  locales,
  defaultLocale,
  params,
}) {
  // Empty slug on front page
  // Make sure root element page pr folder are selected in storyblok
  let slug = params.slug ? params.slug.join("/") : "";

  let sbParams = {
    version: "draft",
    resolve_relations: relationsResolvers,
    language: locale,
  };

  let { data } = await getStoryblokApi().get(
    `cdn/stories/${locale}/${slug}`,
    sbParams
  );

  let sbIndexParams = {
    version: "draft",
    resolve_relations: relationsResolvers,
    starts_with: `${locale}/${slug}`,
  };

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
      locales,
      defaultLocale,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths({ locales }) {
  let { data } = await getStoryblokApi().get("cdn/links/", {
    is_folder: false,
    filter_query: {
      component: {
        in: "page",
      },
    },
  });

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;

    let splittedSlug = slug.split("/");
    const linkLocale = splittedSlug[0];
    splittedSlug.shift();
    if (splittedSlug == "") splittedSlug = false;

    // create additional languages
    for (const locale of locales) {
      if (linkLocale === locale) {
        paths.push({ params: { slug: splittedSlug }, locale });
      }
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}
