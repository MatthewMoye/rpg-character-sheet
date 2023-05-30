import { useState } from "react";
import { useAppSelector } from "@renderer/hooks/storeHooks";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";
import portrait from "@renderer/assets/portrait.png";
import InfoItem from "./InfoItem";
import InfoTabs from "./InfoTabs";
import classes from "./InfoSection.module.css";

const InfoSection = () => {
  const { img, description } = useAppSelector((state) => state.character);
  const [activeTab, setActiveTab] = useState("info");

  const setActiveTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <CharacterSection height={"14rem"}>
      <InfoTabs activeTab={activeTab} setActiveTab={setActiveTabHandler} />
      <div className={classes.wrapper}>
        {activeTab === "info" && (
          <img
            src={img ? img : portrait}
            alt="Character"
            className={classes.pic}
          />
        )}
        <div className={classes.infoWrapper}>
          {Object.keys(description[activeTab]).map((item) => (
            <InfoItem
              key={`info-item-${item}`}
              activeTab={activeTab}
              label={item}
              value={description[activeTab][item]}
            />
          ))}
        </div>
      </div>
    </CharacterSection>
  );
};

export default InfoSection;
