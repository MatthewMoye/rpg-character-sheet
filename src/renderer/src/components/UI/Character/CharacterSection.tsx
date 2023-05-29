import { PropsWithChildren } from "react";
import styles from "./CharacterSection.module.css";

type CharacterSectionProps = {
  width?: string;
  height?: string;
};

const CharacterSection = (props: PropsWithChildren<CharacterSectionProps>) => {
  const { children, width, height } = props;
  return (
    <div className={styles.container} style={{ width, height }}>
      {children}
    </div>
  );
};

export default CharacterSection;
