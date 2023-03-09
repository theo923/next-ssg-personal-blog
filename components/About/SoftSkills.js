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
              One of the most important skills I learned from football was the
              importance of teamwork. Our coach emphasized that being united as
              a team was more powerful than any individual effort. In a football
              match, we were limited to just eleven players, so it was important
              that we all worked together towards the same goal. Even if we
              didn't know each other very well, we could treat each other as
              good competitors and strive for the win together.
            </p>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={3} direction="left">
            <h2>- Communication</h2>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={4} direction="right">
            <p className="softSkillsDescription">
              Communication was also crucial in football. Every move we made on
              the field could impact the outcome of the game, so it was
              essential that we communicated well with each other both on and
              off the field. By understanding each other's thought process and
              approach to the game, we could work together more effectively as a
              team.
            </p>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={4} direction="left">
            <h2>- Organization</h2>
          </SetIntersectionObserver>
          <SetIntersectionObserver type={5} direction="right">
            <p className="softSkillsDescription">
              Finally, organization was key to balancing my football commitments
              with my academic studies. After a grueling football practice, it
              was often tempting to just put off my homework and revision. But
              by developing good organizational skills, I was able to create a
              schedule that ensured I had enough time for both football and
              schoolwork. This helped me to stay on track and avoid missing
              important deadlines or exams.
            </p>
          </SetIntersectionObserver>
        </div>
      </div>
    </>
  );
};

export default SoftSkills;
