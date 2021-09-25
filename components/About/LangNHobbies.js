import React from "react";
import Link from "next/link";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";

const LangNHobbies = ({ forwardRef }) => {
    return (
        <>
            <div
                data-test="component-langNHobbies"
                ref={forwardRef}
                className="langNhobbies"
            >
                <div className="langNhobbiesContainer">
                    <div className="langNhobbiesLeftContainer">
                        <SetIntersectionObserver type={1} direction="down">
                            <h3>LANGUAGES</h3>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={2} direction="left">
                            <p>English</p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={3} direction="left">
                            <p>Cantonese</p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={4} direction="left">
                            <p>Japanese</p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={5} direction="left">
                            <p>Mandarin</p>
                        </SetIntersectionObserver>
                    </div>

                    <div className="langNhobbiesRightontainer">
                        <SetIntersectionObserver type={1} direction="down">
                            <h3>HOBBIES</h3>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={2} direction="right">
                            <p>
                                Writing{" "}
                                <span>
                                    <Link href="/">
                                        <a target="_blank">Blog</a>
                                    </Link>
                                </span>
                            </p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={3} direction="right">
                            <p>
                                Listening to tech podcast (
                                <span>
                                    <a
                                        href="https://syntax.fm/"
                                        target="_blank"
                                    >
                                        Syntax
                                    </a>
                                </span>
                                ,{" "}
                                <span>
                                    <a
                                        href="https://devchat.tv/show/javascript-jabber/"
                                        target="_blank"
                                    >
                                        JS Jabber
                                    </a>
                                </span>
                                )
                            </p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={4} direction="right">
                            <p>
                                Learning new Technology in any criteria (Unity,
                                Unraid OS)
                            </p>
                        </SetIntersectionObserver>
                        <SetIntersectionObserver type={5} direction="right">
                            <p>Reading Tech newsletter (React, JavaScript)</p>
                        </SetIntersectionObserver>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LangNHobbies;
