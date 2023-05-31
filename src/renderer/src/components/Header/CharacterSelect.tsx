import Select from "react-select";
import styles from "./CharacterSelect.module.css";

const CharacterSelect = () => {
  const options = [
    { value: "test1", label: "Character 1" },
    { value: "test2", label: "Character 2" },
    { value: "test3", label: "Character 3" },
  ];

  const characterSwitchHandler = () => {
    // Handle data update here
  };

  return (
    <div className={styles.dropdown}>
      <Select
        placeholder="Choose Character..."
        options={options}
        onChange={characterSwitchHandler}
      />
    </div>
  );
};

export default CharacterSelect;
