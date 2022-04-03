import React from "react";
import { GrLinkTop, GrProjects, GrLanguage } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { ImExit } from "react-icons/im";

const AboutMeSideBar = ({
  coverRef,
  coreProjectsRef,
  completeSkillSetsRef,
  softSkillsRef,
  langNHobbiesRef,
  contactItemRef,
  executeScroll,
}) => {
  return (
    <nav data-test="component-aboutMeSideBar" className="aboutSideBar">
      <div className="aboutSideBarDiv">
        <GrLinkTop
          className="aboutSideBarDivIcon"
          size={20}
          onClick={() => executeScroll(coverRef)}
        />
        <GrProjects
          className="aboutSideBarDivIcon"
          size={20}
          onClick={() => executeScroll(coreProjectsRef)}
        />
        <FaRegStar
          className="aboutSideBarDivIcon"
          size={20}
          onClick={() => executeScroll(completeSkillSetsRef)}
        />
        <GiSkills
          className="aboutSideBarDivIcon"
          size={20}
          onClick={() => executeScroll(softSkillsRef)}
        />
        <GrLanguage
          className="aboutSideBarDivIcon"
          size={20}
          onClick={() => executeScroll(langNHobbiesRef)}
        />
        <ImExit
          className="aboutSideBarDivIcon"
          size={20}
          onClick={() => executeScroll(contactItemRef)}
        />
      </div>
    </nav>
  );
};

export default AboutMeSideBar;
