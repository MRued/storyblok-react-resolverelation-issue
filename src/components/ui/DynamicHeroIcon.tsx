// DynamicHeroIcon.tsx
// Simple Dynamic HeroIcons Component for React (typescript / tsx)
import { FC } from "react";
import * as HIcons from "@heroicons/react/24/outline";

const DynamicHeroIcon: FC<{ icon: string }> = (props) => {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon] ?? icons["StopCircleIcon"];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon {...props} aria-hidden="true" />
    </>
  );
};

export default DynamicHeroIcon;
