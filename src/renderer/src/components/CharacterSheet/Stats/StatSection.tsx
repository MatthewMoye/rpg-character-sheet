import AbilityItem from "./AbilityItem";
import classes from "./StatSection.module.css";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";
import { useAppSelector } from "@renderer/hooks/storeHooks";

const StatSection = () => {
  const { stats } = useAppSelector((state) => state.character);
  const abilities = Object.keys(stats.abilites);

  return (
    <CharacterSection height={"8rem"}>
      <div className={classes.content}>
        <div style={{ width: "10rem" }}>health</div>
        <div style={{ width: "10rem" }}>movement</div>
        <div className={classes.attributes}>
          {abilities.map((el) => {
            return <AbilityItem key={el} stat={el} />;
          })}
        </div>
      </div>
    </CharacterSection>
  );
};

export default StatSection;
