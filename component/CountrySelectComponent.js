import React from "react";
import Select from "react-select";

// static country name
const chooseCountry = [
  {
    label: "Bangladesh",
    value: "bangladesh",
  },
  {
    label: "India",
    value: "india",
  },
  {
    label: "China",
    value: "china",
  },
];
const CountrySelectComponent = ({ setSelectedCountry }) => {
  return (
    <>
      <Select
        instanceId="long-value-select"
        classNamePrefix="select"
        name="level of study"
        defaultValue={chooseCountry[0]}
        options={chooseCountry}
        onChange={setSelectedCountry}
      />
    </>
  );
};

export default CountrySelectComponent;
