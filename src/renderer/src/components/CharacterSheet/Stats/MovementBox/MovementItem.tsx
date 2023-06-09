import styles from "./MovementItem.module.css";

const MovementItem = ({ type }: { type: string }) => {
  return (
    <div className={styles.movementItemBox}>
      <span className={styles.movementTypePrefix}>{type}</span>
      <span className={styles.movementTypeSpeed}>
        {30}
        <span className={styles.movementTypeUnit}> ft</span>
      </span>
    </div>
  );
};

export default MovementItem;
