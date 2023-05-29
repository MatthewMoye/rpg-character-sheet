import CharacterSelect from "./CharacterSelect";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.container}>
      <CharacterSelect />
    </header>
  );
};

export default Header;
