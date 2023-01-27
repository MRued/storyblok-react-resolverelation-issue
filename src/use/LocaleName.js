const localesInfo = [
  {
    code: "en",
    name: "English",
    flag: "https://img.icons8.com/office/40/000000/great-britain.png",
  },
  {
    code: "da",
    name: "Danish",
    flag: "https://img.icons8.com/office/40/000000/denmark.png",
  },
  {
    code: "sv",
    name: "Swedish",
    flag: "https://img.icons8.com/office/40/000000/sweden.png",
  },
  {
    code: "no",
    name: "Norwegian",
    flag: "https://img.icons8.com/office/40/000000/norway.png",
  },
];

export function getLocaleInfo(locale, returnType) {
  const localeObjIdx = localesInfo.findIndex((lo) => lo.code === locale);

  if (returnType === "name") {
    return localesInfo[localeObjIdx].name ?? "English";
  }

  if (returnType === "flag") {
    return localesInfo[localeObjIdx].flag ?? "";
  }
}
