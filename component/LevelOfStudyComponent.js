import InputLabel from "@mui/material/InputLabel";

import Select from "react-select";

const LevelOfStudyComponent = ({
  chooseLevelOfStudy,
  selectedLevelOfStudy,
  setSelectedLevelOfStudy,
}) => {
  console.log();
  return (
    <>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Choose level of study
      </InputLabel>
      <Select
        instanceId="long-value-select"
        classNamePrefix="select"
        name="level of study"
        options={chooseLevelOfStudy}
        onChange={setSelectedLevelOfStudy}
      />
    </>
  );
};

export default LevelOfStudyComponent;
