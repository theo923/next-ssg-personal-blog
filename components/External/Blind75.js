import { useState } from "react";
import { BLIND75_STATUS } from "./Blind75_Status";
import {
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { BsWindow } from "react-icons/bs";
import NextLink from "next/link";

const LeetCodeDifficulty = {
  0: "green",
  1: "orange",
  2: "red",
};

const Blind75 = () => {
  const [headerExpand, setHeaderExpand] = useState(false);
  let objectList = Reflect.ownKeys(BLIND75_STATUS) || [];

  const getBooleanList = (obj) => {
    const newObject = {};
    obj.forEach((i) => {
      newObject[i] = false;
    });

    return newObject;
  };
  const [showAll, setShowAll] = useState(getBooleanList(objectList));

  return (
    <div className="w-full" data-test="component-Blind75">
      <div className="blindWrapper">
        <div
          className="blindComponent blindHeader"
          onClick={() => setHeaderExpand((prev) => !prev)}
        >
          <h1 style={{ fontSize: "30px" }}>My Blind75 Progress</h1>
          <h1 style={{ fontSize: "30px" }}>
            {headerExpand ? <FaCompressArrowsAlt /> : <FaExpandArrowsAlt />}
          </h1>
        </div>
        {headerExpand && (
          <div className="blindComponent">
            {Reflect.ownKeys(BLIND75_STATUS).map((cat, idx) => {
              return (
                <div key={`cat_${idx}`}>
                  <div
                    className="blindHeader"
                    onClick={() => {
                      setShowAll((prev) => {
                        return { ...prev, [idx]: !prev[idx] };
                      });
                    }}
                  >
                    <div>
                      <h2>{cat}</h2>
                    </div>
                    <div className="blindFunction">
                      <div className="blindProgressBase">
                        <div
                          className="blindProgress"
                          style={{
                            width: `${
                              (BLIND75_STATUS[cat].filter((b) => b.status)
                                .length /
                                BLIND75_STATUS[cat].length) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                      {showAll[idx] ? <FaCompress /> : <FaExpand />}
                    </div>
                  </div>
                  {idx < Reflect.ownKeys(BLIND75_STATUS).length - 1 && (
                    <div className="line" />
                  )}
                  {showAll[idx] && (
                    <>
                      <div className="blindQuestionBoard">
                        {BLIND75_STATUS[cat].map((q, iddx) => {
                          return (
                            <div>
                              <div className="blindQuestion">
                                <div className="blindQuestion">
                                  <h2
                                    style={{
                                      color: LeetCodeDifficulty[q.difficulty],
                                    }}
                                  >
                                    {q.question}
                                  </h2>
                                  {q.lcUrl && (
                                    <div
                                      className="blindLink"
                                      style={{ marginLeft: "20px" }}
                                    >
                                      <a href={q.lcUrl} target="_blank">
                                        <BsWindow />
                                      </a>
                                    </div>
                                  )}
                                </div>
                                <div className="blindQuestion">
                                  {q.url && (
                                    <div className="blindLink">
                                      <NextLink href={`/blog/${q.url}`}>
                                        <FiLink />
                                      </NextLink>
                                    </div>
                                  )}
                                  {q.status && (
                                    <BsFillCheckCircleFill color="green" />
                                  )}
                                </div>
                              </div>
                              {iddx < BLIND75_STATUS[cat].length - 1 && (
                                <div className="line" />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <div className="line" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blind75;
