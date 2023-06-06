import { PropsWithChildren } from "react";
import styles from "./CharacterSection.module.css";

type CharacterSectionProps = {
  width?: string;
  height?: string;
};

const CharacterSection = (props: PropsWithChildren<CharacterSectionProps>) => {
  const { children, width, height } = props;
  return (
    <section className={styles.container} style={{ width, height }}>
      {children}
    </section>
  );
};

export default CharacterSection;
