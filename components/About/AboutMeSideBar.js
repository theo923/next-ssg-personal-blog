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
        <nav
            data-test="component-aboutMeSideBar"
            className="fixed right-3 sm:right-1/13 md:right-1/7 lg:right-auto top-1/2 lg:w-1/12 h-full flex flex-col z-30"
        >
            <div className="flex flex-col justify-center items-center">
                <GrLinkTop
                    className="my-4 cursor-pointer hover:text-green-500"
                    size={20}
                    onClick={() => executeScroll(coverRef)}
                />
                <GrProjects
                    className="my-4 cursor-pointer hover:text-green-500"
                    size={20}
                    onClick={() => executeScroll(coreProjectsRef)}
                />
                <FaRegStar
                    className="my-4 cursor-pointer hover:text-green-500"
                    size={20}
                    onClick={() => executeScroll(completeSkillSetsRef)}
                />
                <GiSkills
                    className="my-4 cursor-pointer hover:text-green-500"
                    size={20}
                    onClick={() => executeScroll(softSkillsRef)}
                />
                <GrLanguage
                    className="my-4 cursor-pointer hover:text-green-500"
                    size={20}
                    onClick={() => executeScroll(langNHobbiesRef)}
                />
                <ImExit
                    className="my-4 cursor-pointer hover:text-green-500"
                    size={20}
                    onClick={() => executeScroll(contactItemRef)}
                />
            </div>
        </nav>
    );
};

export default AboutMeSideBar;
