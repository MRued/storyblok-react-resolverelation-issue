import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export default function StoryblokImage({ ...props }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {props.src && (
        <Image
          src={props.src}
          alt={props.alt}
          {...props}
          className={clsx(props.className)}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      )}
      {loading && (
        <div className="h-full w-full absolute inset-0 bg-slate-300 animate-pulse" />
      )}
    </>
  );
}
