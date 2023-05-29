import { useState } from "react";
import { tabsFields } from "@renderer/templates/pf1e/Info";
import InfoItem from "./InfoItem";
import classes from "./InfoSection.module.css";
import InfoTabs from "./InfoTabs";
import portrait from "../../assets/portrait.png";

const InfoSection = () => {
  const [data, setData] = useState(tabsFields["info"]);
  const [activeTab, setActiveTab] = useState("Info");
  const [editInfo, setEditInfo] = useState(true);
  const [characterInfo, setCharacterInfo] = useState(tabsFields["Info"]);

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
        {activeTab === "Info" && (
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
