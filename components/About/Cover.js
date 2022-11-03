import React from "react";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";
import { FaGithub, FaTwitter, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import Link from "next/link";

const Cover = ({ forwardRef, executeScroll, coreProjectsRef }) => {
  return (
    <>
      <div data-test="component-cover" ref={forwardRef} className="aboutCover">
        <div className="aboutCoverContainer">
          <SetIntersectionObserver type={1} direction="down">
            <h1>Theo Tam</h1>
            <h2>Software Engineer</h2>
          </SetIntersectionObserver>

          <SetIntersectionObserver type={2} direction="left">
            <div className="aboutContactLink">
              <a href="https://github.com/theo923" target="_blank">
                <FaGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/theotam923/" target="_blank">
                <FaLinkedinIn size={30} />
              </a>
              <a href="https://twitter.com/TheoTam4" target="_blank">
                <FaTwitter size={30} />
              </a>
              <a href="mailto:theotam923@gmail.com" target="_blank">
                <FaMailBulk size={30} />
              </a>
            </div>
          </SetIntersectionObserver>

          <SetIntersectionObserver type={3} direction="right">
            <p className="aboutCoverIntro">
              A Software Engineer based in UK (right now) with{" "}
              <span>2 years</span> of commercial experiences in web development,
              more than 6 years of experiences in programming. Now I am working
              for <span>Twitter, Core Ads Team</span> as{" "}
              <span>Fullstack Developer (F: React / B: Scala)</span>, help
              advertisers reaching out to their targeted audiences so that their
              brands could <span>keep growing</span>. With ownership in some
              important <span>audience features</span>. Previously working for a
              company which is leading in <span>advertising</span> industry and
              maintaining and building new functionalities for Kidadl. Besides,{" "}
              <span>Python</span> is a language that I have constantly used. I
              usually loved to crack on with some challenging{" "}
              <span>data structure & algorithm problems</span> on{" "}
              <span>leetcode</span> by <span>Python</span>.
            </p>
          </SetIntersectionObserver>
          <div className="aboutCoverBtn">
            <SetIntersectionObserver type={4} direction="left">
              <button onClick={() => executeScroll(coreProjectsRef)}>
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
