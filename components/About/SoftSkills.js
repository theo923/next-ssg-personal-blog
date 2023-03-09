import React from "react";
import SetIntersectionObserver from "../functionality/SetIntersectionObserver";

const SoftSkills = ({ forwardRef }) => {
  return (
    <>
      <div
        data-test="component-softSkills"
        ref={forwardRef}
        className="softSkills"
      >
        <div>
          <SetIntersectionObserver type={1} direction="down">
            <h3 className="aboutHeading">Soft Skills</h3>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={2} direction="left">
            <h2 className="softSkillsPos">Football Team Member</h2>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={3} direction="right">
            <p className="softSkillsDescription">
              During my time in secondary school, I spent a lot of time playing
              football. While I cherish the memories of those games, there were
              also some valuable soft skills that I picked up that have proven
              useful in my professional life.
            </p>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={4} direction="left">
            <h2>- Teamwork</h2>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={5} direction="right">
            <p className="softSkillsDescription">
              If you involved in a team, you should uphold Teamwork, this is
              because <span>Being united is way powerful than individual</span>{" "}
              - that is what the coach taught us in the first football team
              practice. Sometimes, it is impossible to be familiar with everyone
              in the team, because of{" "}
              <span>different cultures and personalities</span>. In a football
              match, we are limited to have only 11 members to participate in a
              competition, which means some members cannot participate
              eventually. Sometimes, somebody may treat others as opponents.
              However, everyone in the team share the same goal -{" "}
              <span>To Win the Match</span>, therefore, we can treat each other{" "}
              <span>as a good competitor</span> -{" "}
              <span>
                To strive for an opportunity as well as To Win the Match
              </span>
            </p>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={3} direction="left">
            <h2>- Communication</h2>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={4} direction="right">
            <p className="softSkillsDescription">
              In football match, every moves important, which may reverse the
              overall results in the end. Therefore, in order to work well in a
              team, teammates should{" "}
              <span>
                alway communicate with each other and practice together before
                the match
              </span>
              . Each members should{" "}
              <span>
                understand and foresee other's action before they actually move
              </span>
              . Therefore, I usually have conversation with my teammates in
              knowing how they think logically and their thoughts on playing
              football.
            </p>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={4} direction="left">
            <h2>- Organization</h2>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={5} direction="right">
            <p className="softSkillsDescription">
              There are always conflict between Football Team practice and
              Self-learning. Everyday when we finished a football team practice
              we should feel tired and not willing to do anything, so homework
              and revisions are easily being ignored. Therefore, having good
              organization skills is important.{" "}
              <span>
                For me, I will plan a time schedule and to comply with it
              </span>
              , which help preventing deadlines and reminding me the important
              date so that I will not forget. (Exams){" "}
            </p>
          </SetIntersectionObserver>
        </div>
      </div>
    </>
  );
};

export default SoftSkills;
