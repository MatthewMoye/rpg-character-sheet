import CharacterSelect from "./CharacterSelect";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <CharacterSelect />
    </header>
  );
};

export default Header;
