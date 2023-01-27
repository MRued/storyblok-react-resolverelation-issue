import { storyblokEditable } from "@storyblok/react";

export default function Sidebar({ blok }) {
  return (
    <div
      {...storyblokEditable(blok)}
      className="border p-4 flex flex-col gap-4"
    >
      <h2 className="font-bold">{blok.title}</h2>
      <p>Stringfied blok.pages:</p>
      <code>{JSON.stringify(blok.pages)}</code>
      <div className="bg-blue-100 p-2">
        <span>
          ^This should be resolved relations and not just uuid's. Downgrading to
          @storyblok/react 1.9.3 solves the problem. It does not work on +v2
        </span>
      </div>
    </div>
  );
}
