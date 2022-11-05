import React, { useState } from "react";
import Select from "react-select";
import InputLabel from "@mui/material/InputLabel";
const groupedOptions = [
  {
    label: "Colours",
    options: [
      {
        value: "ocean",
        label: "Ocean",
        color: "#00B8D9",
        isFixed: true,
      },
    ],
  },
  {
    label: "Flavours",
    options: [
      {
        value: "vanilla",
        label: "Vanilla",
        rating: "safe",
      },
    ],
  },
];
const chooseSystemOfStudy = [
  {
    label: "National Qualification",
    options: [
      {
        value: "ssc/hsc(bangla)",
        label: "SSC/HSC (Bangla)",
      },
      {
        value: "ssc/hsc(english)",
        label: "SSC/HSC (English)",
      },
      {
        value: "dakhil/alim",
        label: "Dakhil/Alim",
      },
    ],
  },
  {
    label: "Internation Qualification",
    options: [
      {
        value: "o'level/a'level",
        label: "O'Level / A'Level",
      },
      {
        value: "sat",
        label: "SAT",
      },
      {
        value: "ib",
        label: "IB",
      },
      {
        value: "ap",
        label: "IB",
      },
    ],
  },
];
const formatGroupLabel = (chooseSystemOfStudy) => (
  <div>
    <span>{chooseSystemOfStudy.label}</span>
  </div>
);
const customStyles = {
  option: (provided) => ({
    ...provided,
    paddingLeft: 20,
  }),
};
const SystemOfStudyComponent = ({ systemOfStudy, setSystemOfStudy }) => {
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
