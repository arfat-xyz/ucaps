import Container from "@mui/material/Container";
import { useState } from "react";
import { useCookies } from "react-cookie";
import GPAComponent from "../component/GPAComponent";
import LevelOfStudyComponent from "../component/LevelOfStudyComponent";
import SystemOfStudyComponent from "../component/SystemOfStudyComponent";
import CountrySelectComponent from "./CountrySelectComponent";
import chooseLevelOfStudy from "../public/data";
const BegineerFormComponent = () => {
  // necessary state for component
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLevelOfStudy, setSelectedLevelOfStudy] = useState(null);
  const [systemOfStudy, setSystemOfStudy] = useState(null);
  const [GPA, setGPA] = useState({});
  const [totalGPA, setTotalGPA] = useState(null);

  // get and set cookies for further use
  const [cookies, setCookie] = useCookies(["inputDetailes"]);

  // form submission with set cookies
  const handleSubmitForOnSubmit = (e) => {
    setGPA(e);
    setTotalGPA(e.ssc + e.hsc);
    setCookie("inputDetailes", {
      e,
      systemOfStudy: systemOfStudy.value,
      selectedLevelOfStudy: selectedLevelOfStudy.value,
    });
  };
  console.log("coockies", cookies.inputDetailes);

  return (
    <>
      <Container>
        <h1>hello world</h1>
        {/* This is for selecting country  */}
        <CountrySelectComponent setSelectedCountry={setSelectedCountry} />

        {/* This is study you've complete  */}
        <LevelOfStudyComponent
          chooseLevelOfStudy={chooseLevelOfStudy}
          selectedLevelOfStudy={selectedLevelOfStudy}
          setSelectedLevelOfStudy={setSelectedLevelOfStudy}
        />

        {/* types of study you completed  */}
        {selectedLevelOfStudy && (
          <SystemOfStudyComponent
            chooseSystemOfStudy={selectedLevelOfStudy?.chooseSystemOfStudy}
            systemOfStudy={systemOfStudy}
            setSystemOfStudy={setSystemOfStudy}
          />
        )}

        {/* gpa or gre/gmat selecting with a form */}
        {systemOfStudy && (
          <GPAComponent
            systemOfStudy={systemOfStudy}
            selectedLevelOfStudy={selectedLevelOfStudy}
            handleSubmitForOnSubmit={handleSubmitForOnSubmit}
          />
        )}
      </Container>
    </>
  );
};

export default BegineerFormComponent;
