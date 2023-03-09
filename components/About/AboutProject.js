import React from "react";
import Image from "next/image";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import {
  FaStar,
  FaCheck,
  FaAngleDoubleUp,
  FaGithub,
  FaRegWindowMaximize,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const AboutProject = ({ project, direction }) => {
  const [imageInterval, setImageInterval] = React.useState(1);

  React.useEffect(() => {
    const id = setTimeout(() => {
      if (imageInterval >= 4) setImageInterval(1);
      else setImageInterval(imageInterval + 1);
    }, 15000);
    return () => {
      clearTimeout(id);
    };
  }, [imageInterval]);

  const frameworkNlibrary = (item, num, direction) => (
    <SetIntersectionObserver key={num} type={num} direction={direction}>
      <span className="frameworkNlibrary">
        <FaStar className="star" size={13} />
        {item}
      </span>
    </SetIntersectionObserver>
  );
  const sitefunction = (item, num, direction) => (
    <SetIntersectionObserver key={num} type={num} direction={direction}>
      <span className="sitefunction">
        <FaCheck className="check" size={13} />
        {item}
      </span>
    </SetIntersectionObserver>
  );
  const promptToHover = () => (
    <span className="floatUpDown prompt">
      <FaAngleDoubleUp className="check" size={13} />
      Try to hover over it!
    </span>
  );
  const showBox = (proj) => (
    <Image
      className="blur-sm hover:blur-none"
      layout="fill"
      src={`/about/${proj}-000${imageInterval}.gif`}
    />
  );
  return (
    <SetIntersectionObserver
      data-test="AboutProject"
      type={2}
      direction={direction}
    >
      <div data-test="component-aboutProject" className="aboutProjectGrid">
        <div
          className={`aboutProjectGridDiv order-1 ${
            direction === "right" ? "lg:order-2" : "lg:order-1 mr-10"
          }`}
        >
          <div className="aboutProjectName">{project?.name}</div>
          <SetIntersectionObserver type={3} direction={direction}>
            <div className="aboutProjectDescription">
              {project?.description}
            </div>
          </SetIntersectionObserver>
          <div className="aboutProjectTechsGrid">
            <h1>Frameworks, Libraries & Techniques Used:</h1>
            {project?.techs.map((item, idx) => {
              return frameworkNlibrary(item, idx, direction);
            })}
          </div>
          <div className="aboutProjectFunction">
            <h1>Functions:</h1>
            {project?.functions.map((item, idx) => {
              return sitefunction(item, idx, direction);
            })}
          </div>
        </div>
        <div className="aboutProjectImg">{showBox(project?.id)}</div>
        <div
          className={`order-2 ${
            direction === "right" ? "lg:order-4" : "lg:order-3"
          } `}
        >
          <span>
            {project?.link?.map((link, idx) => (
              <span
                key={idx}
                className={`flex ${
                  direction === "right" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <button>
                  <a href={link} target="_blank">
                    {project?.linkicon[idx] === "Window" ? (
                      <FaRegWindowMaximize
                        className="aboutProjectIcon"
                        size={30}
                      ></FaRegWindowMaximize>
                    ) : (
                      <FaGithub
                        className="aboutProjectIcon"
                        size={30}
                      ></FaGithub>
                    )}
                  </a>
                </button>
                <span
                  className={`${
                    direction === "right"
                      ? "floatLeftRight mr-5"
                      : "floatRightLeft ml-5"
                  }`}
                >
                  {direction === "right" ? (
                    <h2 className="aboutProjectLinkDescription">
                      {project?.linkdescription[idx]}
                      <FaAngleDoubleRight
                        className="aboutProjectLinkArrowRight"
                        size={20}
                      ></FaAngleDoubleRight>
                    </h2>
                  ) : (
                    <h2 className="aboutProjectLinkDescription">
                      <FaAngleDoubleLeft
                        className="aboutProjectLinkArrowLeft"
                        size={20}
                      ></FaAngleDoubleLeft>
                      {project?.linkdescription[idx]}
                    </h2>
                  )}
                </span>
              </span>
            ))}
          </span>
        </div>
        <div
          className={`order-4 ${
            direction === "right" ? "lg:order-3" : "lg:order-4"
          } `}
        >
          {promptToHover()}
        </div>
      </div>
    </SetIntersectionObserver>
  );
};

export default AboutProject;
