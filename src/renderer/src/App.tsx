import Header from "./components/Header/Header";
import InfoSection from "./components/CharacterInfo/InfoSection";
import StatSection from "./components/CharacterStats/StatSection";
import MiscSection from "./components/CharacterMisc/MiscSection";
import SkillSection from "./components/CharacterSkills/SkillSection";
import FeatureSection from "./components/CharacterFeatures/FeatureSection";
import NoteSection from "./components/CharacterNotes/NoteSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <InfoSection />
        <StatSection />
        <div
          style={{
            width: "1210px",
            minHeight: "650px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <MiscSection />
          <SkillSection />
          <FeatureSection />
        </div>
        <NoteSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;
