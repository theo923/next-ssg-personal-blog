import React from "react";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import { FaStar } from "react-icons/fa";

const Skill = ({name, star, idx}) => {
    return (
        <div data-test="component-skill">
            <SetIntersectionObserver key={idx} type={idx} direction="left">
                <div className="skill">
                    <span>
                        <FaStar
                            className={`text-yellow-500 mr-2 ${
                                star ? "" : "hidden"
                            }`}
                            size={13}
                        />
                        {name}
                    </span>
                </div>
            </SetIntersectionObserver>
        </div>
    );
};

export default Skill;
