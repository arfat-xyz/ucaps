import React, { useState } from "react";
import Select from "react-select";
import InputLabel from "@mui/material/InputLabel";

// national or international label select
const formatGroupLabel = (chooseSystemOfStudy) => (
  <div>
    <span>{chooseSystemOfStudy.label}</span>
  </div>
);

// custom styles for options
const customStyles = {
  option: (provided) => ({
    ...provided,
    paddingLeft: 20,
  }),
};
const SystemOfStudyComponent = ({
  chooseSystemOfStudy,
  systemOfStudy,
  setSystemOfStudy,
}) => {
  return (
    <div>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Choose system of study
      </InputLabel>
      <Select
        instanceId="long-value-select"
        styles={customStyles}
        className="custom_space"
        name="system of study"
        onChange={setSystemOfStudy}
        options={chooseSystemOfStudy}
        formatGroupLabel={formatGroupLabel}
      />
    </div>
  );
};

export default SystemOfStudyComponent;
