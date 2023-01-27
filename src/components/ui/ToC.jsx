import { useHeadsObserver } from "src/hooks";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ToC() {
  const [headings, setHeadings] = useState([]);

  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".content-area h2, .content-area h3")
    ).map((elem) => ({
      id: elem.id,
      text: elem.innerText,
      level: Number(elem.nodeName.charAt(1)),
      ...(Number(elem.nodeName.charAt(1)) == 2 && { children: [] }),
    }));

    const newArr = [];
    let newestH2idx = 0;
    elements.forEach((elem, idx) => {
      if (elem.level == 2) {
        newArr.push(elem);
        newestH2idx = newArr.length == 0 ? 0 : newArr.length - 1;
      } else if (elem.level == 3) {
        //newArr[newestH2idx].children.push(elem);
        newArr[newestH2idx]?.children.push(elem);
      }
    });
    setHeadings(newArr);
  }, []);

  function scrollToTargetAdjusted(elId) {
    let element = document.getElementById(elId);
    let headerOffset = 60;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      // behavior: "smooth",
    });
  }

  return (
    <>
      {headings.length > 1 ? (
        <nav
          aria-label="Table of contents"
          className="xl:border xl:p-4 xl:rounded-md xl:-ml-16 xl:bg-white"
        >
          <p className="hidden md:block font-bold text-sm text-slate-800 mb-2">
            On this page
          </p>
          <ul className="text-sm space-y-3">
            {headings.map((heading, idx) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTargetAdjusted(heading.id);
                  }}
                  className={classNames(
                    activeId === heading.id ||
                      heading.children.some((e) => e.id == activeId)
                      ? "text-primary-600"
                      : "text-slate-500 hover:text-slate-600",
                    "text-sm block leading-tight"
                  )}
                >
                  <span className="flex gap-1 items-center">
                    <ChevronRightIcon
                      className={classNames(
                        heading.children.length > 0 &&
                          (activeId === heading.id ||
                            heading.children.some((e) => e.id == activeId))
                          ? "rotate-90"
                          : "",
                        "duration-150 h-4 w-4 shrink-0"
                      )}
                    />
                    {heading.text}
                  </span>
                </a>
                {heading.children.length > 0 &&
                (activeId === heading.id ||
                  heading.children.some((e) => e.id == activeId)) ? (
                  <ul className="text-sm space-y-2 pl-7 mt-2 duration-150">
                    {heading.children.map((child) => (
                      <>
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToTargetAdjusted(child.id);
                            }}
                            className={classNames(
                              activeId === child.id
                                ? "text-primary-600"
                                : "text-slate-500 hover:text-slate-600",
                              "text-sm block "
                            )}
                          >
                            {child.text}
                          </a>
                        </li>
                      </>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
}
