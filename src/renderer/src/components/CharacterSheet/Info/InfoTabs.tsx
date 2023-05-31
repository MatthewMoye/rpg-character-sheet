import styles from "./InfoTabs.module.css";

type InfoTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
};

const InfoTabs = (props: InfoTabsProps) => {
  const { activeTab, setActiveTab, tabs } = props;
  return (
    <div className={styles.tabList}>
      {tabs.map((tab) => {
        return (
          <div
            key={`${tab}-info-tab`}
            className={tab === activeTab ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab(tab)}
          >
            <span className={styles.tabText}>{tab}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InfoTabs;
