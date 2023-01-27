export default function pathLangRemover(path) {
  // remove language part of path which is the first part of the path
  // if the path is /en/something, then the path will be /something
  // if the path is /something, then the path will be /something
  // if the path is /en/something/else, then the path will be /something/else
  // if the path is /something/else, then the path will be /something/else
  const pathParts = path.split("/");
  if (pathParts.length > 1) {
    pathParts.shift();
    return "/" + pathParts.join("/");
  }
}
