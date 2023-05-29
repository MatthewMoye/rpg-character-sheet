import classes from "./StatItem.module.css";

type StatItemProps = {
  stat: string;
};

const StatItem = (props: StatItemProps) => {
  const { stat } = props;
  return (
    <div className={classes.field}>
      <label className={classes.label}>
        <input className={classes.input} />
        {stat}
      </label>
    </div>
  );
};

export default StatItem;
