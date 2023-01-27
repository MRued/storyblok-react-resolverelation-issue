import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import classNames from "@/use/ClassNames";
import Image from "next/image";

export default function AuthorBox({ authorData = {}, size = "", children }) {
  return (
    <div>
      <div
        className={classNames(
          size == "lg" ? "flex-col" : "pr-4 items-center p-1",
          "rounded-md inline-flex gap-2 relative"
        )}
      >
        <div
          className={classNames(
            size == "lg" ? "w-16" : "w-12",
            "aspect-square rounded-full overflow-hidden"
          )}
        >
          {authorData.profilePicture?.filename ? (
            <Image
              src={authorData.profilePicture?.filename + "/m" + "/200x0"}
              alt={authorData.profilePicture?.alt}
              width={200}
              height={200}
            />
          ) : null}
        </div>
        <div>
          <p
            className={classNames(
              size == "lg" ? "" : "text-sm",
              "block mb-0 text-slate-700 font-medium flex items-center gap-1"
            )}
          >
            {authorData.name}
            <span>
              <CheckBadgeIcon className="h-5 w-5 text-primary-600" />
            </span>
          </p>
          {size == "lg" || size == "sm" ? (
            <p className="text-primary-600 font-medium text-sm">
              {authorData.position}
            </p>
          ) : null}
          {children ? children : null}
        </div>
      </div>
      {size == "lg" ? (
        <p className="block mb-0 mt-1 text-sm text-slate-500">
          {authorData.description}
        </p>
      ) : null}
    </div>
  );
}
