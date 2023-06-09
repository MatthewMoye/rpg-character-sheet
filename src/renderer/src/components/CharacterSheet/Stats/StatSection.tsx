import CharacterSection from "@renderer/components/UI/Character/CharacterSection";
import { useAppSelector } from "@renderer/hooks/storeHooks";
import HealthBox from "./HealthBox/HealthBox";
import AbilityItem from "./AbilityItem";
import styles from "./StatSection.module.css";
import MovementBox from "./MovementBox/MovementBox";

const StatSection = () => {
  const { stats } = useAppSelector((state) => state.character);
  const abilities = Object.keys(stats.abilites);

  return (
    <CharacterSection height={"8rem"}>
      <div className={styles.content}>
        <HealthBox />
        <MovementBox />
        <div className={styles.abilities}>
          {abilities.map((el) => {
            return <AbilityItem key={el} stat={el} />;
          })}
        </div>
      </div>
    </CharacterSection>
  );
};

export default StatSection;
