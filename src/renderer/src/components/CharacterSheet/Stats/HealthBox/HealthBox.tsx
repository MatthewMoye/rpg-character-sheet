import { useAppSelector } from "@renderer/hooks/storeHooks";
import styles from "./HealthBox.module.css";

const HealthBox = () => {
  const { currentHp = 0, maxHp = 0 } = useAppSelector(
    (state) => state.character.stats
  );
  return (
    <div className={styles.healthBox}>
      <div className={styles.hpCount}>
        <span className={styles.hpCountSpan}>
          {currentHp}/{maxHp}
        </span>
      </div>
      <button className={styles.editHpButton}>Heal/Damage</button>
    </div>
  );
};

export default HealthBox;
