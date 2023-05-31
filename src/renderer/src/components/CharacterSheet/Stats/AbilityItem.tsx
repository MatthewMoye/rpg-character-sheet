import { useState } from "react";
import { abilityScoreModifierFormula } from "@renderer/templates/pf1e/Info";
import styles from "./AbilityItem.module.css";

type AbilityItemProps = {
  stat: string;
};

const AbilityItem = (props: AbilityItemProps) => {
  const { stat } = props;

  const [abilityScore, setAbilityScore] = useState(12);
  const mod = abilityScoreModifierFormula(abilityScore);

  return (
    <div className={styles.field}>
      <label className={styles.label}>{stat}</label>
      <input
        type={"number"}
        value={abilityScore}
        onChange={(e) => setAbilityScore(Number(e.target.value))}
        className={styles.input}
      />
      <span className={styles.statMod}>{mod}</span>
    </div>
  );
};

export default AbilityItem;
