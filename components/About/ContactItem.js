import React from "react";
import Link from "next/link";
import {
    FaGithub,
    FaTwitter,
    FaLinkedinIn,
    FaMailBulk,
    FaAngleDoubleRight,
    FaAngleDoubleLeft,
} from "react-icons/fa";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";

const ContactItem = ({ forwardRef, executeScroll, coreProjectsRef }) => {
    return (
        <>
            <div
                data-test="component-contactItem"
                ref={forwardRef}
                className="aboutContact"
            >
                <div className="aboutContactContainer">
                    <SetIntersectionObserver type={1} direction="left">
                        <h3>Thank you for visiting my site</h3>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={2} direction="left">
                        <h3>Are you interested in my skills?</h3>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={3} direction="left">
                        <h3>Please feel free to contact me</h3>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={4} direction="left">
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
                    <SetIntersectionObserver type={5} direction="left">
                        <p>Telephone call is avaliable: +4407718602197</p>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={6} direction="left">
                        <button onClick={() => executeScroll(coreProjectsRef)}>
                            <FaAngleDoubleRight className="floatLeftRight" />
                            Go To The Top
                            <FaAngleDoubleLeft className="floatRightLeft" />
                        </button>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={7} direction="left">
                        <button>
                            <FaAngleDoubleRight className="floatLeftRight" />
                            <Link href="/">Go To My Blog</Link>
                            <FaAngleDoubleLeft className="floatRightLeft" />
                        </button>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={8} direction="left">
                        <button>
                            <FaAngleDoubleRight className="floatLeftRight" />
                            <a href="https://github.com/theo923">
                                Go To Github and learn more
                            </a>
                            <FaAngleDoubleLeft className="floatRightLeft" />
                        </button>
                    </SetIntersectionObserver>
                    <SetIntersectionObserver type={9} direction="left">
                        <button>
                            <FaAngleDoubleRight className="floatLeftRight" />
                            <Link href="/contact">Leave a Comment</Link>
                            <FaAngleDoubleLeft className="floatRightLeft" />
                        </button>
                    </SetIntersectionObserver>
                </div>
            </div>
        </>
    );
};

export default ContactItem;
