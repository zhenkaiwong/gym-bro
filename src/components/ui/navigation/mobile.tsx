import Link from "next/link";
import { NavigationItem } from ".";

function BottomNavigation({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) {
  return (
    <>
      {navigationItems.map((navigationItem) => (
        <BottomNavigationItem
          text={navigationItem.text}
          href={navigationItem.href}
          icon={navigationItem.icon}
          key={`bottom-nav-${navigationItem.text}`}
        />
      ))}
    </>
  );
}

function BottomNavigationItem(props: NavigationItem) {
  return (
    <div className="flex flex-col items-center">
      {<props.icon />}
      <Link href={props.href}>{props.text}</Link>
    </div>
  );
}

export { BottomNavigation };
