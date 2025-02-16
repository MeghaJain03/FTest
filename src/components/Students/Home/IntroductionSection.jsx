import {ChallengeItem} from "./ChallengeItem";

const IntroductionSection = () => (
  <div
    className="mt-11 mb-4 rounded-[19px] overflow-hidden py-2 px-9"
    style={{
      background: "linear-gradient(to bottom, transparent 60%, #007481 100%)", 
    }}
  >
    <h2 className="text-[2.1rem] font-overpass text-[#4a4d4a] font-semibold my-4 pt-3">
      Introduction
    </h2>
    <h4 className="text-[1.6rem]">
    Student life can be exciting, but it also comes with its share of challenges—academic pressure, exam stress, peer competition, and personal struggles.
    </h4>
    <dl className="mt-4">
      <ChallengeItem title="Academic Stress & Pressure:">
      Students often face stress from exams, assignments, and competition. This can lead to anxiety, burnout, and other mental health concerns.
      </ChallengeItem>
      <ChallengeItem title="Affordable Therapy:">
      Freudia offers therapy sessions starting at just ₹250, making professional mental health support accessible to all students.


      </ChallengeItem>
      <ChallengeItem title="Confidential & Safe Space:">
      Freudia guarantees a secure and judgment-free environment where students can express their thoughts freely.
      </ChallengeItem>
    </dl>
    <h4 className="text-[1.6rem] mt-4">
      It's important to note that these issues are interconnected; for instance, financial stress can intensify feelings of anxiety and depression, while social isolation may hinder access to supportive resources.
    </h4>
  </div>
);

export default IntroductionSection;