import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";

import Select from "react-select";
const chooseLevelOfStudy = [
  {
    label: "Diploma (Polytechnic)",
    value: "diploma",
  },
  {
    label: "Undergraduate/Bachelors",
    value: "bachelors",
  },
  {
    label: "Postgraduate/ Masters",
    value: "masters",
  },
];

const LevelOfStudyComponent = ({
  selectedLevelOfStudy,
  setSelectedLevelOfStudy,
}) => {
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
