import { CheckCircledIcon } from "@radix-ui/react-icons";

function IconList({ listArr = [] }) {
  return (
    <ul className="dark space-y-2">
      {listArr.map((li) => (
        <li
          key={li}
          className="flex items-top gap-2 text-slate-800 dark:text-slate-300"
        >
          <CheckCircledIcon className="mt-px h-5 w-5 text-primary-600 dark:text-primary-500" />
          <span>{li}</span>
        </li>
      ))}
    </ul>
  );
}

export default IconList;
