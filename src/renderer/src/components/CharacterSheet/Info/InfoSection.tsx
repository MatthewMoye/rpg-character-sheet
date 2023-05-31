import { useState } from "react";
import { useAppSelector } from "@renderer/hooks/storeHooks";
import CharacterSection from "@renderer/components/UI/Character/CharacterSection";
import portrait from "@renderer/assets/portrait.png";
import InfoItem from "./InfoItem";
import InfoTabs from "./InfoTabs";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  const { img, info } = useAppSelector((state) => state.character);
  const [activeTab, setActiveTab] = useState("details");

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
      <div className={styles.wrapper}>
        {activeTab === "details" && (
          <img
            src={img ? img : portrait}
            alt="Character"
            className={styles.pic}
          />
        )}
        <div className={styles.infoWrapper}>
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
