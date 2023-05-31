import classes from "./InfoTabs.module.css";

type InfoTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: string[];
};

const InfoTabs = (props: InfoTabsProps) => {
  const { activeTab, setActiveTab, tabs } = props;
  return (
    <div className={classes.tabList}>
      {tabs.map((tab) => {
        return (
          <div
            key={`${tab}-info-tab`}
            className={tab === activeTab ? classes.tabActive : classes.tab}
            onClick={() => setActiveTab(tab)}
          >
            <span className={classes.tabText}>{tab}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InfoTabs;
