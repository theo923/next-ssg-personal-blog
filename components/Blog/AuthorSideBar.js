import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { GrLocation } from "react-icons/gr";

const AuthorSideBar = () => {
    return (
        <div data-test="component-blog-authorSideBar" className="blogSideBar">
            <div className="blogSideBarImg">
                <Image
                    height="100"
                    width="100%"
                    layout="responsive"
                    src="/image/profilepic.jpg"
                    alt="avatar"
                />
                <div className="blogSideBarDiv">
                    <h1>Theo Tam</h1>
                    <p>{"Professional / Lifelong Learner"}</p>
                    <div className="blogSideBarIcon">
                        <div>
                            <CgProfile size="30px" />
                            <h2>React Developer</h2>
                        </div>

                        <div>
                            <FaTwitter size="30px" />
                            <h2>
                                <a
                                    href="https://twitter.com/TheoTam4"
                                    target="_blank"
                                >
                                    @TheoTam4
                                </a>
                            </h2>
                        </div>
                        <div>
                            <ImGithub size="30px" />
                            <h2>
                                <a
                                    href="https://github.com/theo923"
                                    target="_blank"
                                >
                                    @theo923
                                </a>
                            </h2>
                        </div>
                        <div>
                            <SiGmail size="30px" />
                            <h2>theotam923@gmail.com</h2>
                        </div>
                        <div>
                            <GrLocation size="30px" />
                            <h2>Eastleigh</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorSideBar;
