import { ChangeEvent, useState } from "react";
import Modal from "@renderer/components/UI/Modal/Modal";
import { useAppDispatch, useAppSelector } from "@renderer/hooks/storeHooks";
import styles from "./AdjustHpModal.module.css";
import { updateCurrentHp } from "@renderer/features/character/characterSlice";

type AdjustHpModalInterface = {
  toggleModal: () => void;
};

const AdjustHpModal = (props: AdjustHpModalInterface) => {
  const { toggleModal } = props;

  const dispatch = useAppDispatch();
  const { currentHp = 0, maxHp = 0 } = useAppSelector(
    (state) => state.character.stats
  );

  const [adjustValue, setAdjustValue] = useState(0);

  const handleAdjustValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAdjustValue(Number(e.target.value));
  };

  const handleHpHeal = () => {
    dispatch(updateCurrentHp(adjustValue));
  };

  const handleHpDamage = () => {
    dispatch(updateCurrentHp(-adjustValue));
  };

  return (
    <Modal setIsOpen={toggleModal} width={260} height={320}>
      <div className={styles.adjustHpContent}>
        <span className={styles.hpCountSpan}>
          HP: {currentHp}/{maxHp}
        </span>
        <div className={styles.hpAdjustSection}>
          <button className={styles.healButton} onClick={handleHpHeal}>
            Heal
          </button>
          <input
            className={styles.hpAdjustInput}
            value={adjustValue}
            type={"number"}
            min={0}
            onChange={handleAdjustValue}
          />
          <button className={styles.dmgButton} onClick={handleHpDamage}>
            Damage
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AdjustHpModal;
