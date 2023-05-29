import { useState } from "react";
import { abilities } from "@renderer/templates/pf1e/Info";
import StatItem from "./StatItem";
import classes from "./StatSection.module.css";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";

const StatSection = () => {
  const [abils, setAbils] = useState(abilities);

  return (
    <CharacterSection height={"8rem"}>
      <div className={classes.attributes}>
        {Object.keys(abils).map((e) => {
          return <StatItem key={e} stat={e} />;
        })}
      </div>
      <div>health</div>
      <div>movement</div>
    </CharacterSection>
  );
};

export default StatSection;
