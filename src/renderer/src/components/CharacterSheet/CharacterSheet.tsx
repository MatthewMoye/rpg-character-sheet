import InfoSection from "./Info/InfoSection";
import StatSection from "./Stats/StatSection";
import MiscSection from "./Misc/MiscSection";
import SkillSection from "./Skills/SkillSection";
import FeatureSection from "./Features/FeatureSection";
import NoteSection from "./Notes/NoteSection";
import styles from "./CharacterSheet.module.css";

const CharacterSheet = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <InfoSection />
        <StatSection />
        <div className={styles.sectionWrapper}>
          <MiscSection />
          <SkillSection />
          <FeatureSection />
        </div>
        <NoteSection />
      </div>
    </div>
  );
};

export default CharacterSheet;
