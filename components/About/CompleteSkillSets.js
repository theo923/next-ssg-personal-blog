import React from "react";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import Skill from "./Skill";

const CompleteSkillSets = ({ forwardRef }) => {
  const skills = {
    JavaScript: true,
    JAVA: true,
    Scala: true,
    Python: true,
    React: true,
    NextJS: true,
    NodeJS: true,
    "Script Writing": true,
    "Agile / Scrum": true,
    TypeScript: true,
    "REST API": true,
    "AWS RDS": true,
    ExpressJS: true,
    "Framer-Motion": true,
    "PostgreSQL & MongoDB": true,
    "Jest & Enzyme": true,
    "Test Driven Development": true,
    "Docker & Unraid": true,
    "CI/CD": true,
    GraphQL: true,
    "Axios & Fetch": true,
    "Progressive Web App": true,
  };

  return (
    <>
      <div
        data-test="component-completeSkillSets"
        ref={forwardRef}
        className="skillSet"
      >
        <div className="skillSetDiv">
          <SetIntersectionObserver type={1} direction="down">
            <h3 className="aboutHeading">Skill Sets</h3>
          </SetIntersectionObserver>
          <div className="skillGrid">
            {skills
              ? Object.entries(skills).map(([key, val], idx) => (
                  <Skill key={idx} name={key} star={val} idx={idx} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteSkillSets;
