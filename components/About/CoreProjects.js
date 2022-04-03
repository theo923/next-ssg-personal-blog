import React from "react";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import AboutProject from "./AboutProject";
import { FLance, blog, Netfake, shop } from "../Text/AboutProjectText";

const CoreProjects = ({ forwardRef }) => {
  return (
    <>
      <section
        data-test="component-coreProjects"
        ref={forwardRef}
        className="coreProjects"
      >
        <div className="coreProjectsDiv">
          <SetIntersectionObserver type={1} direction="down">
            <h3>Projects</h3>
          </SetIntersectionObserver>
          <div className="coreProjectsGrid">
            <AboutProject project={FLance} direction={"right"} />
            <AboutProject project={blog} direction={"left"} />
            <AboutProject project={Netfake} direction={"right"} />
            <AboutProject project={shop} direction={"left"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreProjects;
