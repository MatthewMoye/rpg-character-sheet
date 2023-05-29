import { useState } from "react";
import { abilityScoreModifierFormula } from "@renderer/templates/pf1e/Info";
import classes from "./StatItem.module.css";

type StatItemProps = {
  stat: string;
};

const StatItem = (props: StatItemProps) => {
  const { stat } = props;

  const [abilityScore, setAbilityScore] = useState(12);
  const mod = abilityScoreModifierFormula(abilityScore);
  console.log(abilityScoreModifierFormula(0));

  return (
    <div className={classes.field}>
      <label className={classes.label}>{stat}</label>
      <input
        type={"number"}
        value={abilityScore}
        onChange={(e) => setAbilityScore(Number(e.target.value))}
        className={classes.input}
      />
      <span className={classes.statMod}>{mod}</span>
    </div>
  );
};

export default StatItem;
