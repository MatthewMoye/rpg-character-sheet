import { useState } from "react";
import { abilities } from "@renderer/templates/pf1e/Info";
import AbilityItem from "./AbilityItem";
import classes from "./StatSection.module.css";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";

const StatSection = () => {
  const [abils, setAbils] = useState(abilities);

  return (
    <CharacterSection height={"8rem"}>
      <div className={classes.content}>
        <div style={{ width: "10rem" }}>health</div>
        <div style={{ width: "10rem" }}>movement</div>
        <div className={classes.attributes}>
          {Object.keys(abils).map((e) => {
            return <AbilityItem key={e} stat={e} />;
          })}
        </div>
      </div>
    </CharacterSection>
  );
};

export default StatSection;
