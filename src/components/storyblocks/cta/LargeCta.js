import { storyblokEditable } from "@storyblok/react";
import React from "react";
import pathLangRemover from "../../../use/pathLangRemover";

export default function LargeCta({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="p-4">
      <h2>{blok.title}</h2>
    </div>
  );
}
