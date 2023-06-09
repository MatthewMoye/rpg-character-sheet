import CharacterSection from "@renderer/components/UI/Character/CharacterSection";

const CombatSection = () => {
  return (
    <CharacterSection width={"15rem"}>
      <div>INITIATIVE</div>
      <div>
        <div>AC</div>
        <div>TOUCH</div>
        <div>FLAT-FOOTED</div>
      </div>
      <div>
        <div>FORTITUDE</div>
        <div>REFLEX</div>
        <div>WILL</div>
      </div>
      <div>BAB</div>
      <div>SPELL RESISTANCE</div>
      <div>
        <div>CMB</div>
        <div>CMD</div>
      </div>
    </CharacterSection>
  );
};

export default CombatSection;
