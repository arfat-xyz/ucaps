import Container from "@mui/material/Container";
import { useState } from "react";
import { useCookies } from "react-cookie";
import GPAComponent from "../component/GPAComponent";
import LevelOfStudyComponent from "../component/LevelOfStudyComponent";
import SystemOfStudyComponent from "../component/SystemOfStudyComponent";
import CountrySelectComponent from "./CountrySelectComponent";

const BegineerFormComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLevelOfStudy, setSelectedLevelOfStudy] = useState(null);
  const [systemOfStudy, setSystemOfStudy] = useState(null);
  const [GPA, setGPA] = useState({});
  const [totalGPA, setTotalGPA] = useState(null);
  const [cookies, setCookie] = useCookies(["inputDetailes"]);
  const handleSubmitForOnSubmit = (e) => {
    setGPA(e);
    setTotalGPA(e.ssc + e.hsc);
    setCookie("inputDetailes", { GPA: e, systemOfStudy, selectedLevelOfStudy });
  };
  console.log("coockies", cookies.inputDetailes);
  return (
    <>
      <Container>
        <h1>hello world</h1>
        <CountrySelectComponent setSelectedCountry={setSelectedCountry} />
        <LevelOfStudyComponent
          selectedLevelOfStudy={selectedLevelOfStudy}
          setSelectedLevelOfStudy={setSelectedLevelOfStudy}
        />
        {selectedLevelOfStudy && (
          <SystemOfStudyComponent
            systemOfStudy={systemOfStudy}
            setSystemOfStudy={setSystemOfStudy}
          />
        )}
        {systemOfStudy && (
          <GPAComponent handleSubmitForOnSubmit={handleSubmitForOnSubmit} />
        )}
      </Container>
    </>
  );
};

export default BegineerFormComponent;
