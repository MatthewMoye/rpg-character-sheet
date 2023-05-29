import { useState } from "react";
import { tabs, tabsFields } from "@renderer/templates/pf1e/Info";
import portrait from "@renderer/assets/portrait.png";
import InfoItem from "./InfoItem";
import InfoTabs from "./InfoTabs";
import classes from "./InfoSection.module.css";

const InfoSection = () => {
  const [data, setData] = useState(tabsFields[tabs[0]]);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [editInfo, setEditInfo] = useState(true);
  const [characterInfo, setCharacterInfo] = useState(tabsFields[tabs[0]]);

  const setActiveTabHandler = (tab: string) => {
    setActiveTab(tab);
    console.log(tab);

    setData(tabsFields[tab.toLowerCase()]);
  };

  const setEditInfoHandler = () => {
    setEditInfo(!editInfo);
  };

  const setCharacterInfoHandler = (event, label) => {
    setCharacterInfo({
      ...characterInfo,
      [label]: event.target.value,
    });
  };

  console.log(data);

  return (
    <div className={classes.section}>
      <InfoTabs activeTab={activeTab} setActiveTab={setActiveTabHandler} />
      <button className={classes.button} onClick={setEditInfoHandler}>
        {editInfo ? "Edit" : "Stop Editing"}
        {/* Change to make popout window for editing ? */}
      </button>
      <div className={classes.wrapper}>
        {activeTab === tabs[0] && (
          <img src={portrait} alt="Character" className={classes.pic} />
        )}
        <div className={classes.infoWrapper}>
          {Object.keys(data).map((el) => {
            return (
              <InfoItem
                key={el}
                label={el}
                editInfo={editInfo}
                setAttribute={setCharacterInfoHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
