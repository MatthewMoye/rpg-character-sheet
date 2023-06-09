import MovementItem from "./MovementItem";
import styles from "./MovementBox.module.css";

const MovementBox = () => {
  return (
    <div className={styles.movementBox}>
      <div className={styles.normalMovementContainer}>
        <MovementItem type={"SPEED"} />
        <MovementItem type={"CLIMB"} />
      </div>
      <div className={styles.advancedMovementContainer}>
        <MovementItem type={"SWIM"} />
        <MovementItem type={"FLY"} />
        <MovementItem type={"BURROW"} />
      </div>
    </div>
  );
};

export default MovementBox;
