import React from "react";
import Link from "next/link";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";

const LangNHobbies = ({ forwardRef }) => {
  return (
    <>
      <div
        data-test="component-langNHobbies"
        ref={forwardRef}
        className="py-20 my-20 mx-4 lg:mx-14 min-h-screen"
      >
        <div className="grid grid-cols-2 text-center mb-12 lg:m-28">
          <div className="border-r-2 border-gray-700 my-32">
            <SetIntersectionObserver type={1} direction="down">
              <h3 className="font-spartan text-2xl lg:text-5xl mb-20">
                LANGUAGES
              </h3>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={2} direction="left">
              <p className="font-anaheim text-2xl mb-20">English</p>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={3} direction="left">
              <p className="font-anaheim text-2xl mb-20">Cantonese</p>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={4} direction="left">
              <p className="font-anaheim text-2xl mb-20">Japanese</p>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={5} direction="left">
              <p className="font-anaheim text-2xl mb-20">Mandarin</p>
            </SetIntersectionObserver>
          </div>

          <div className="border-l-2 border-gray-700 my-32">
            <SetIntersectionObserver type={1} direction="down">
              <h3 className="font-spartan text-2xl lg:text-5xl mb-20">
                HOBBIES
              </h3>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={2} direction="right">
              <p className="font-anaheim text-2xl mb-20">
                Write{" "}
                <span className="text-blue-400 hover:text-blue-700">
                  <Link href="/">
                    <a target="_blank">Blog</a>
                  </Link>
                </span>
              </p>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={3} direction="right">
              <p className="font-anaheim text-2xl mb-20">
                Listen Tech Podcast (
                <span className="text-blue-400 hover:text-blue-700">
                  <a href="https://syntax.fm/" target="_blank">
                    Syntax
                  </a>
                </span>
                ,{" "}
                <span className="text-blue-400 hover:text-blue-700">
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
              <p className="font-anaheim text-2xl mb-20">
                Learn new Technology in any criteria (Unity, Unraid OS)
              </p>
            </SetIntersectionObserver>
            <SetIntersectionObserver type={5} direction="right">
              <p className="font-anaheim text-2xl mb-20">
                Read Tech newsletter (React, JavaScript)
              </p>
            </SetIntersectionObserver>
          </div>
        </div>
      </div>
    </>
  );
};

export default LangNHobbies;
