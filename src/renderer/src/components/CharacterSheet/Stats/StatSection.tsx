import { useState } from "react";
import { abilities } from "@renderer/templates/pf1e/Info";
import StatItem from "./StatItem";
import classes from "./StatSection.module.css";

const StatSection = () => {
  const [abils, setAbils] = useState(abilities);

  return (
    <div className={classes.section}>
      <div className={classes.attributes}>
        {Object.keys(abils).map((e) => {
          return <StatItem key={e} stat={e} />;
        })}
      </div>
      <div>health</div>
      <div>movement</div>
    </div>
  );
};

export default StatSection;
