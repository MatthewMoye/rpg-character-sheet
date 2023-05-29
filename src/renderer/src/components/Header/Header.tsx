import AccountDropdown from "./AccountDropdown";
import CharacterSelect from "./CharacterSelect";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <CharacterSelect />
      <AccountDropdown />
    </header>
  );
};

export default Header;
