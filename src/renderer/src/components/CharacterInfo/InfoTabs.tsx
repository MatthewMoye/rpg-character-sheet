import { tabs } from "../../templates/pf1e/Info";
import classes from "./InfoTabs.module.css";

type InfoTabsProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const InfoTabs = (props: InfoTabsProps) => {
  const { activeTab, setActiveTab } = props;
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
