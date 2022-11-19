import { CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import GpaCard from "./Cards/GpaCard";
import FinalSearchForm from "./FinalSearchForm";
const SearchFormComponent = ({ cookies }) => {
  const [loading, setLoading] = useState(false);
  console.log(cookies);
  const educationNames = Object.keys(cookies.education);
  // console.log(educationNames);
  const systemOfStudy = cookies.systemOfStudy;
  console.log(systemOfStudy);
  if (loading) return <CircularProgress />;
  return (
    <>
      <div className="container m-0 m-auto">
        <p className="text-3xl text-center font-bold underline">Hello world!</p>
        <div className="flex justify-around">
          {/* {educationNames.map((educationName, index) => (
            <GpaCard educationName={educationName} key={index} />
          ))} */}
          {systemOfStudy === "igcse/a'level" ? (
            <h1>arfat</h1>
          ) : (
            <>
              {educationNames.map((educationName, index) => (
                <GpaCard educationName={educationName} key={index} />
              ))}
              {systemOfStudy === "sat" ? (
                "s"
              ) : (
                <div className="px-5 py-3 shadow-lg rounded-lg">
                  Combind : {cookies.education.ssc + cookies.education.hsc}
                </div>
              )}
            </>
          )}
        </div>
        <FinalSearchForm />
      </div>
    </>
  );
};

export default SearchFormComponent;
