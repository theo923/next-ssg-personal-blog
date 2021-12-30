import React from "react";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

const Cover = ({ forwardRef, executeScroll, coreProjectsRef }) => {
    return (
        <>
            <div
                data-test="component-cover"
                ref={forwardRef}
                className="aboutCover"
            >
                <div className="aboutCoverContainer">
                    <SetIntersectionObserver type={1} direction="down">
                        <h1>Theo Tam</h1>
                        <h2>React Developer</h2>
                    </SetIntersectionObserver>

                    <SetIntersectionObserver type={2} direction="left">
                        <div className="aboutContactLink">
                            <a
                                href="https://github.com/theo923"
                                target="_blank"
                            >
                                <FaGithub size={30} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/theotam923/"
                                target="_blank"
                            >
                                <FaLinkedinIn size={30} />
                            </a>
                            <a
                                href="https://twitter.com/TheoTam4"
                                target="_blank"
                            >
                                <FaTwitter size={30} />
                            </a>
                            <a
                                href="mailto:theotam923@gmail.com"
                                target="_blank"
                            >
                                <FaMailBulk size={30} />
                            </a>
                        </div>
                    </SetIntersectionObserver>

                    <SetIntersectionObserver type={3} direction="right">
                        <p className="aboutCoverIntro">
                            A React Developer based in UK with{" "}
                            <span>1 years</span> of commercial experiences in
                            web development, <span>more than 5 years</span> of
                            experiences in programming. Worked with{" "}
                            <span>international startup</span> across hongkong
                            and japan for building functional and complex online
                            shopping application before. Now I am working for a
                            company which is{" "}
                            <span>leading in advertising industry</span> and I
                            build amazing websites everyday. As a{" "}
                            <span>lifelong learner</span> , I am still actively
                            on Github <span>every day</span> with more than{" "}
                            <span>1000+</span> contributions this year. Created
                            <span>19</span> repositories in Github. Keep
                            learning and writing Blog post <span>actively</span>
                            .
                        </p>
                    </SetIntersectionObserver>
                    <div className="aboutCoverBtn">
                        <SetIntersectionObserver type={4} direction="left">
                            <button
                                onClick={() => executeScroll(coreProjectsRef)}
                            >
                                Details
                            </button>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={5} direction="right">
                            <button>
                                <Link href="/">Blog</Link>
                            </button>
                        </SetIntersectionObserver>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;
