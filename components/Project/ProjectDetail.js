import React from "react";

const ProjectDetail = ({ project }) => {
    return (
        <div data-test="component-projectDetail" className="projectDetail">
            <a href={project?.link} target="_blank">
                <div className="projectDetailDiv">
                    <img
                        className="projectDetailImg"
                        src={project?.imgUrl}
                        alt={project?.heading}
                    />
                    <h2 className="projectDetailHeading">{project?.heading}</h2>
                    <p className="projectDetailContext">{project?.context}</p>
                </div>
            </a>
        </div>
    );
};

export default ProjectDetail;
