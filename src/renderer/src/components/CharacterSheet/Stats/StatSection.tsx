import AbilityItem from "./AbilityItem";
import HealthBox from "./HealthBox/HealthBox";
import styles from "./StatSection.module.css";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";
import { useAppSelector } from "@renderer/hooks/storeHooks";

const StatSection = () => {
  const { stats } = useAppSelector((state) => state.character);
  const abilities = Object.keys(stats.abilites);

  return (
    <CharacterSection height={"8rem"}>
      <div className={styles.content}>
        <HealthBox />
        <div style={{ width: "10rem" }}>movement</div>
        <div className={styles.attributes}>
          {abilities.map((el) => {
            return <AbilityItem key={el} stat={el} />;
          })}
        </div>
      </div>
    </CharacterSection>
  );
};

export default StatSection;
