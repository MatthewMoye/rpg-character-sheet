import { ChangeEvent } from "react";
import { useAppDispatch } from "@renderer/hooks/storeHooks";
import classes from "./InfoItem.module.css";
import { setCharacterDescriptionProperty } from "@renderer/features/character/characterSlice";

type InfoItemProps = {
  activeTab: string;
  label: string;
  value: string;
};

const InfoItem = (props: InfoItemProps) => {
  const { activeTab, label, value } = props;

  const dispatch = useAppDispatch();

  const updateValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCharacterDescriptionProperty(activeTab, label, e.target.value));
  };

  return (
    <div className={classes.field}>
      <label className={classes.label}>
        <input className={classes.input} value={value} onChange={updateValue} />
        {label}
      </label>
    </div>
  );
};

export default InfoItem;
