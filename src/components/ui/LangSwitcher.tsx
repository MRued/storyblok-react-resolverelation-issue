import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { getLocaleInfo } from "@/use/LocaleName.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter(
    (locale) => locale !== activeLocale
  );

  return (
    <div>
      <Menu as="div" className="relative text-left">
        <div>
          <Menu.Button className="flex items-center gap-px rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-100 pr-1 pl-2">
            <span className="sr-only">Open options</span>
            {/*<GlobeAltIcon className="h-5 w-5" aria-hidden="true" />*/}
            <img
              src={getLocaleInfo(activeLocale, "flag")}
              className="h-5 mr-1"
            />
            <ChevronDownIcon className="h-6 w-6 md:h-3 md:w-3 " />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 flex flex-col">
              {locales.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                  <Menu.Item key={locale}>
                    {({ active }) => (
                      <Link href={{ pathname, query }} as={asPath} locale={locale} legacyBehavior>
                        <span
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : locale == activeLocale
                              ? " text-primary-600 bg-slate-50 cursor-auto"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm flex hover:bg-slate-100 w-full cursor-pointer items-center gap-4 group duration-200"
                          )}
                        >
                          <img
                            src={getLocaleInfo(locale, "flag")}
                            className="h-5 group-hover:-rotate-12 duration-200 group-hover:mr-0.5"
                          />
                          {getLocaleInfo(locale, "name")}
                        </span>
                      </Link>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
