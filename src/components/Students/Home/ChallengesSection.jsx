import React from "react";
import { ChallengeItem, ChallengeHeading } from "../Home/ChallengeItem";

const ChallengesSection = () => (
  <div className="my-12">
    <ChallengeHeading title="What Challenges Students Need To Face?" />
    <p className="text-[1.6rem]">
    Freudia is designed to support students through their mental health journey by offering 
    affordable, accessible, and personalized therapy services. We understand the unique challenges students face, 
    and our platform is tailored to provide solutions that address their emotional and psychological needs. Here’s
     a detailed breakdown of how Freudia can help students:
    </p>
    <dl className="my-4">
      <ChallengeItem title="Academic Stress & Pressure:">
        Students often face stress from exams, assignments, and competition. 
        This can lead to anxiety, burnout, and other mental health concerns.


      </ChallengeItem>
      <ChallengeItem title="Mental Health Struggles:">
      The emotional burden of studies, personal issues, and uncertainty about the future often leads to anxiety, depression, and panic attacks.
      Many students are hesitant to speak up due to the stigma around mental health, fearing judgment from society or peers.
      Feelings of loneliness and isolation are common, especially for students studying away from home.               
      </ChallengeItem>
      <ChallengeItem title="Time Management Difficulties:">
      tudents often juggle multiple responsibilities – attending lectures, completing assignments, preparing for exams, participating in extracurriculars, and maintaining a social life.
      Poor time management can result in sleepless nights, exhaustion, and reduced productivity.
      Striking a balance between studies and self-care is a constant struggle.
      </ChallengeItem>
      <ChallengeItem title="Peer Pressure & Social Expectations:">
      The desire to be accepted by friends often leads students to engage in activities against their will, causing mental distress.
      Bullying, body shaming, or cyberbullying can lead to emotional trauma and low self-esteem.
      The rise of social media intensifies the pressure to maintain a certain image, leading to feelings of inadequacy.
      </ChallengeItem>
      <ChallengeItem title="Financial Stress:">
      Many students face the burden of tuition fees, study materials, accommodation costs, and other expenses.
      Those from low-income families often take up part-time jobs, impacting their studies and health.
      The fear of not being able to support their education can cause constant worry.
      </ChallengeItem>
      <ChallengeItem title="Career Uncertainty:">
      With the evolving job market, students often feel confused about their future career paths.
     The pressure to secure internships, placements, or higher studies can lead to anxiety and feelings of insecurity.
      Fear of failure often results in self-doubt and loss of motivation.
      </ChallengeItem>
      <ChallengeItem title="Family Expectations:">
      In many cultures, parents expect their children to excel academically and choose specific career paths like engineering, medicine, or law.
      Students often struggle to fulfill these expectations while sacrificing their own passions and interests.
      The fear of disappointing their families adds to their emotional burden.

      </ChallengeItem>
      <ChallengeItem title="Lack of Proper Guidance:">
      Many educational institutions lack dedicated mental health support systems.
      Students often find it difficult to access professional counseling services due to cost or stigma.
      Without proper guidance, students may resort to unhealthy coping mechanisms like substance abuse or isolation.

      </ChallengeItem>
    </dl>
    <ChallengeHeading title="How Freudia Can Help ?" />
    <p className="text-[1.6rem]">
    Freudia is designed to support students through their mental health journey
     by offering affordable, accessible, and personalized therapy services.
      We understand the unique challenges students face, and our platform is tailored
       to provide solutions that address their emotional and psychological needs.
        Here’s a detailed breakdown of how Freudia can help students:
    </p>
    <dl className="mt-4">
      <ChallengeItem title="Affordable Counseling Sessions:">
      Many students hesitate to seek mental health support due to high costs.
      How Freudia Helps: Therapy sessions start at just ₹250 for students.
      50% discount on counseling services to ensure no student is left behind due to financial constraints.
      Affordable group therapy sessions and peer support programs.
      </ChallengeItem>
      <ChallengeItem title="Access to Licensed and Experienced Psychologists:">
      Finding a qualified mental health professional can be difficult for students.
      How Freudia Helps: A panel of certified psychologists who specialize in youth and student mental health.
      Experienced in handling academic stress, exam anxiety, low self-esteem, relationship issues, and depression.
      Students can choose a counselor based on their preferences and comfort.

      </ChallengeItem>
      <ChallengeItem title="Anonymous & Confidential Platform:">
      Students often fear judgment from peers, teachers, or parents.
      How Freudia Helps:100% privacy guaranteed – students can seek help anonymously.
      Secure platform ensuring data protection and confidentiality.
      Safe environment to talk about sensitive issues like depression, family pressure, or peer bullying.

      </ChallengeItem>
      <ChallengeItem title="Flexible & Convenient Appointments:">
      Busy academic schedules often prevent students from attending in-person counseling sessions.
      How Freudia Helps:24/7 online platform – students can schedule therapy sessions according to their convenience.
      No travel required – attend counseling from hostels, homes, or college libraries.
      Chat, Call, or Video Sessions – students can select their preferred mode of communication.
      </ChallengeItem>
      <ChallengeItem title="Support Groups for Students:">
      Students often feel isolated and misunderstood.
      How Freudia Helps:Free online support groups where students can share their experiences with others facing similar issues.
      Moderated by mental health experts to ensure a positive and supportive environment.
      Peer-to-peer encouragement fosters a sense of belonging and reduces loneliness.

      </ChallengeItem>
    </dl>
  </div>
);

export default ChallengesSection;
