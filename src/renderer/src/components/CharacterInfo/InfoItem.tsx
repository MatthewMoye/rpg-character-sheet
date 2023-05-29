import { ChangeEvent } from "react";
import classes from "./InfoItem.module.css";

type InfoItemProps = {
  editInfo: boolean;
  label: string;
  setAttribute: (e: ChangeEvent<HTMLInputElement>, label: string) => void;
};

const InfoItem = (props: InfoItemProps) => {
  const { editInfo, label } = props;
  return (
    <div className={classes.field}>
      <label className={classes.label}>
        <input
          className={classes.input}
          readOnly={editInfo}
          onChange={(e) => props.setAttribute(e, label)}
        />
        {label}
      </label>
    </div>
  );
};

export default InfoItem;
