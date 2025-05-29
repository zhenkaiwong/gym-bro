import { IconType } from "react-icons";
import { FaHouseChimney, FaCalendarDays, FaDumbbell } from "react-icons/fa6";
import { BottomNavigation } from "./mobile";

export type NavigationItem = {
  text: string;
  icon: IconType;
  href: string;
};

const navigationItems: NavigationItem[] = [
  { text: "Home", href: "/", icon: FaHouseChimney },
  { text: "Workouts", href: "/workouts", icon: FaCalendarDays },
  { text: "Exercises", href: "/exercises", icon: FaDumbbell },
];

function Navigation() {
  return (
    <div className="border border-solid grid grid-cols-3 fixed bottom-0 w-screen pt-3 pb-5 px-3">
      <BottomNavigation navigationItems={navigationItems} />
    </div>
  );
}

export { Navigation };
