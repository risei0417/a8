import { HeaderLinks } from "components/molecules/HeaderLinks";
import { Logo } from "components/molecules/Logo";

export const Header = () => {
  return (
    <header className="header left">
      <Logo />
      <HeaderLinks />
    </header>
  );
};
