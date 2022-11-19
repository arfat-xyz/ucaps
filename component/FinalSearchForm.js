import React from "react";
import { useState } from "react";
import Select from "react-select";
import subjects from "../public/subject";

const FinalSearchForm = () => {
  const [subject, setSubject] = useState("");
  return (
    <div className=" px-5 py-3 shadow-lg rounded-lg">
      <Select
        instanceId="long-value-select"
        classNamePrefix="select"
        name="level of study"
        placeholder="Type something and press enter..."
        arrowRenderer={null}
        options={subjects}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        onChange={setSubject}
      />
    </div>
  );
};

export default FinalSearchForm;
