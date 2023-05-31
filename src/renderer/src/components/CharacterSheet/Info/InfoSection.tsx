import { useState } from "react";
import { useAppSelector } from "@renderer/hooks/storeHooks";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";
import portrait from "@renderer/assets/portrait.png";
import InfoItem from "./InfoItem";
import InfoTabs from "./InfoTabs";
import classes from "./InfoSection.module.css";

const InfoSection = () => {
  const { img, info } = useAppSelector((state) => state.character);
  const [activeTab, setActiveTab] = useState("description");

  const setActiveTabHandler = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <CharacterSection height={"14rem"}>
      <InfoTabs
        activeTab={activeTab}
        setActiveTab={setActiveTabHandler}
        tabs={Object.keys(info)}
      />
      <div className={classes.wrapper}>
        {activeTab === "description" && (
          <img
            src={img ? img : portrait}
            alt="Character"
            className={classes.pic}
          />
        )}
        <div className={classes.infoWrapper}>
          {Object.keys(info[activeTab]).map((item) => (
            <InfoItem
              key={`info-item-${item}`}
              activeTab={activeTab}
              label={item}
              value={info[activeTab][item]}
            />
          ))}
        </div>
      </div>
    </CharacterSection>
  );
};

export default InfoSection;
