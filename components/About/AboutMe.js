import React from "react";
import Cover from "./Cover";
import CoreProjects from "./CoreProjects";
import LangNHobbies from "./LangNHobbies";
import SoftSkills from "./SoftSkills";
import CompleteSkillSets from "./CompleteSkillSets";
import ContactItem from "./ContactItem";
import AboutMeSideBar from "./AboutMeSideBar";

const AboutMe = () => {
  const coverRef = React.useRef(null);
  const coreProjectsRef = React.useRef(null);
  const completeSkillSetsRef = React.useRef(null);
  const softSkillsRef = React.useRef(null);
  const langNHobbiesRef = React.useRef(null);
  const contactItemRef = React.useRef(null);
  const executeScroll = (Ref) => Ref.current.scrollIntoView();

  return (
    <section data-test="component-aboutme" className="about">
      <div className="container aboutCotent">
        <AboutMeSideBar
          coverRef={coverRef}
          coreProjectsRef={coreProjectsRef}
          completeSkillSetsRef={completeSkillSetsRef}
          softSkillsRef={softSkillsRef}
          langNHobbiesRef={langNHobbiesRef}
          contactItemRef={contactItemRef}
          executeScroll={executeScroll}
        />
        <Cover
          forwardRef={coverRef}
          executeScroll={executeScroll}
          coreProjectsRef={coreProjectsRef}
        />
        <div className="mb-56" />
        <CoreProjects forwardRef={coreProjectsRef} />
        <div className="mb-56" />
        <CompleteSkillSets forwardRef={completeSkillSetsRef} />
        <div className="mb-56" />
        <SoftSkills forwardRef={softSkillsRef} />
        <div className="mb-56" />
        <LangNHobbies forwardRef={langNHobbiesRef} />
        <div className="mb-56" />
        <ContactItem
          forwardRef={contactItemRef}
          executeScroll={executeScroll}
          coreProjectsRef={coverRef}
        />
      </div>
    </section>
  );
};

export default AboutMe;
