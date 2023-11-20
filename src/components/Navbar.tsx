import Image from "next/image";
import LOGO from "../../public/Logo.png";
import BACK_ICON from "../../public/Back.png";
import MENU_ICON from "../../public/Menu.png";
import SEARCH_ICON from "../../public/Search.png";

interface NavbarProps {
  back?: boolean;
}

export default function Navbar({ back }: NavbarProps) {
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-center justify-between pt-12 bg-white px-7">
      <Image
        width={32}
        height={32}
        src={back ? BACK_ICON : MENU_ICON}
        alt={back ? "back" : "menu"}
      />
      <Image width={95} height={39} src={LOGO} alt="logo" />
      <Image width={36} height={36} src={SEARCH_ICON} alt="search" />
    </nav>
  );
}
