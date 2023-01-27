import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import AuthorBox from "./AuthorBox";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function PostCard({ postData = {} }) {
  return (
    (<Link href={"blog" + "/" + postData.slug} passHref>

      <div className="flex flex-col border border-dashed cursor-pointer p-3 rounded-xl hover:border-primary-600 hover:border-solid duration-150 group relative">
        <div className=" relative aspect-h-10 aspect-w-16 h-full w-full overflow-hidden rounded-lg">
          {postData.content.cover_image?.filename ? (
            <Image
              src={postData.content.cover_image.filename + "/m" + "/600x0"}
              alt={postData.content.cover_image.alt}
              width={640}
              height={360}
              layout="responsive"
              quality={90}
              objectFit="cover"
              className="w-full bg-gray-100 group-hover:scale-105 duration-150 group-hover:-rotate-1"
            />
          ) : null}
        </div>
        <div>
          <div className="flex mt-4 gap-3 items-center">
            {postData.content?.category ? (
              <>
                <div className="text-primary-700 text-sm">
                  <p className="mb-0 block">
                    {postData.content.category[0]?.name}
                  </p>
                </div>
                <span className="text-slate-400 pr-0.5">·</span>
              </>
            ) : null}
            <p className="text-sm text-slate-500 mb-0">
              <time
                dateTime={dayjs(postData.first_published_at).format(
                  "D MMM YYYY"
                )}
              >
                {dayjs(postData.first_published_at).format("D MMM YYYY")}
              </time>
            </p>
          </div>
          <div className="mt-3 block">
            <p className="text-xl font-semibold text-gray-900 group-hover:underline">
              {postData?.name}
            </p>
          </div>
          <div className="mt-4">
            <AuthorBox
              authorData={postData.content.author?.content}
              size="sm"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-4 opacity-0 group-hover:opacity-100 group-hover:bottom-4 duration-200">
          <ArrowRightIcon className="h-5 w-5 text-primary-600" />
        </div>
      </div>

    </Link>)
  );
}
