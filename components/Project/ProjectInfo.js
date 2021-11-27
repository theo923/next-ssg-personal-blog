import React from "react";
import ProjectDetail from "./ProjectDetail";
import {
    dockershop,
    blog,
    netFake,
    shop,
    bookmetadata,
} from "../Text/ProjectText";

const ProjectInfo = () => {
    return (
        <section data-test="component-project">
            <div className="project">
                <div className="projectFlex">
                    {[netFake, blog, shop, dockershop, bookmetadata].map(
                        (item, idx) => (
                            <ProjectDetail key={idx} project={item} />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectInfo;
