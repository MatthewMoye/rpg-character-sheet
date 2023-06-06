import { useState } from "react";
import { useAppSelector } from "@renderer/hooks/storeHooks";
import AdjustHpModal from "./AdjustHpModal";
import styles from "./HealthBox.module.css";

const HealthBox = () => {
  const { currentHp = 0, maxHp = 0 } = useAppSelector(
    (state) => state.character.stats
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.healthBox}>
      <div className={styles.hpCount}>
        <span className={styles.hpCountSpan}>
          {currentHp}/{maxHp}
        </span>
      </div>
      <button className={styles.editHpButton} onClick={handleToggleModal}>
        Heal/Damage
      </button>
      {isModalOpen && <AdjustHpModal toggleModal={handleToggleModal} />}
    </div>
  );
};

export default HealthBox;
