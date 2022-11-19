import React from "react";
import { useCookies } from "react-cookie";
const GpaCard = ({ educationName, CombineValue }) => {
  const [cookies] = useCookies(["inputDetailes"]);
  // console.log(cookies.inputDetailes.education);
  // console.log(educationName);
  const educations = cookies.inputDetailes.education;
  console.log(educations);
  return (
    <div className="px-5 py-3 shadow-lg rounded-lg">
      {educationName.toUpperCase()} : {educations[educationName]}
    </div>
  );
};

export default GpaCard;
