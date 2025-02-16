import freudiaLogo from "./images/freudiaLogo.png"
import textureImg from "./images/bg-texture.png";
import logo from "./images/homelogo.png";
import homelogo from "./images/f1.png";
import logoicon from "./images/icon.png";
import coupleDefault from "./images/couples_default.png";
import individualDefault from "./images/individual_default.png";
import teenDefault from "./images/teen_default.png";
import coupleMovement from "./images/couples_movement.png";
import teenMovement from "./images/teen_movement.png";
import individualMovement from "./images/individual_movement.png";
import lightburst from "./images/line-burst-green.svg";
import lineSquiggle from "./images/line-squiggle.svg";
import therapistOne from "./images/I1.jpg";
import therapistTwo from "./images/I7.jpg";
import therapistThree from "./images/I8.jpg";
import therapistFour from "./images/I9.jpg";
import therapistFive from "./images/I10.jpg";
import therapistSix from "./images/I6.jpg";
import therapistSeven from "./images/therapistOne-removebg.png";
import lineburst from "./images/line-burst.svg";
import howitworks1 from "./images/how-it-works-1.png";
import howitworks2 from "./images/how-it-works-2.png";
import howitworks3 from "./images/how-it-works-3.png";
import arrowgreen2 from "./images/arrow-down-green-2.png";
import info from "./images/info-light-green.svg";
import profileIcon from "./images/profileIcon.png";
import student from "./images/student.png";
import farmer from "./images/farmer.webp";
import farmerherobg from "./images/farmerherobg.svg";
import scrollDown from "./images/scrollDown.svg";
import sadfarmer from "./images/sadfarmer.jpg";
import farmer2Img from "./images/farmer2Img.svg";
import farmerSignin from "./images/farmerSignin.png";
import fbgtry from "./images/fbgtry.svg";
import bgfarm1 from "./images/bgfarm1.svg";
import grassbgtry from "./images/grassbgtry.svg";
import studentBg from "./images/studentBg.jpg";
import studentBg2 from "./images/studentBg2.jpg";
import student1 from "./images/student1.png";
import student2 from "./images/student2.jpg";
import studentSIgnup from "./images/signup.webp";
import user from "./images/user.svg";
import studentLogin from "./images/login.webp";
import userIcon from "./images/userIcon.webp";
import studentIcon from "./images/studentIcon.webp";
import farmerIcon from "./images/farmerIcon.webp";
import studentNavIcon from "./images/studentNavIcon.png";
import userNavIcon from "./images/userNavIcon.png";
import eatingDisorder from "./images/eating-disorder.webp";
import formImage from "./images/form-image.webp";
import doctorImg01 from "./images/doctor-img01.png";
import doctorImg02 from "./images/doctor-img02.png";
import doctorImg03 from "./images/doctor-img03.png";
import signup from "./images/signup.gif"
import service1 from "../assets/images/service1.jpg"
import service2 from "../assets/images/service2.jpg"
import service3 from "../assets/images/service3.jpg"
import service4 from "../assets/images/service4.webp"
import service5 from "../assets/images/service5.webp"
import service6 from "../assets/images/service6.webp"
import service7 from "../assets/images/service7.webp"
import service8 from "../assets/images/service8.webp"
import service9 from "../assets/images/service9.webp"
import service10 from "../assets/images/service10.webp"
import service11 from "../assets/images/service11.webp"
import service12 from "../assets/images/service12.jpeg"
import process from "../assets/images/process.jpg"
import therapist from "../assets/images/therapist.webp"
import screen from "../assets/images/screen.jpg"
import homepage from "../assets/images/homepage.png"
import homepage2 from "../assets/images/homepage2.png"
import man from "../assets/images/man.png"
import leaves from "../assets/images/leaves.png"
// import homepage2 from "../assets/images/homepage2.png"

export const doctors = [
  {
    id: 1,
    preferredLanguages: ["hindi", "english"],
    state: "Gujarat",
    name: "Dr. Alfaz Ahmed",
    email: "alfaz.ahmed@example.com",
    password: "hashed_password_alfaz",
    phone: 1234567890,
    photo: doctorImg01,
    ticketPrice: 100,
    role: "doctor",
    specialization: "Surgeon",
    qualifications: ["MBBS", "MS"],
    experiences: ["5 years as a general surgeon", "2 years as a consultant"],
    bio: "Dedicated surgeon.",
    about:
      "Dr. Alfaz Ahmed is a skilled surgeon with expertise in general and laparoscopic surgeries.",
    timeSlots: [
      {
        day: "Wednesday",
        date: "9:00 AM - 11:00 AM"
      },
      {
        day: "Saturday",
        date: "4:00 PM - 6:00 PM"
      }],
    reviews: [],
    averageRating: 4.8,
    totalRating: 272,
    isApproved: "approved",
    appointments: [],
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: 2,
    preferredLanguages: ["hindi", "english"],
    state: "Rajasthan",
    name: "Dr. Saleh Mahmud",
    email: "saleh.mahmud@example.com",
    password: "hashed_password_saleh",
    phone: 9876543210,
    photo: doctorImg02,
    ticketPrice: 120,
    role: "doctor",
    specialization: "Neurologist",
    qualifications: ["MBBS", "DM Neurology"],
    experiences: ["8 years in neurology", "Senior consultant at hospital"],
    bio: "Caring neurologist.",
    about:
      "Dr. Saleh Mahmud is an experienced neurologist specializing in diagnosing and treating brain and nervous system disorders.",
    timeSlots: [
      {
        day: "Sunday",
        date: "9:00 AM - 11:00 AM"
      },
      {
        day: "Monday",
        date: "4:00 PM - 6:00 PM"
      }],
    reviews: [],
    averageRating: 4.8,
    totalRating: 272,
    isApproved: "approved",
    appointments: [],
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: 3,
    preferredLanguages: ["hindi", "english", "Gujarati", "spanish"],
    state: "Madhya Pradesh",
    name: "Dr. Farid Uddin",
    email: "farid.uddin@example.com",
    password: "hashed_password_farid",
    phone: 1122334455,
    photo: doctorImg03,
    ticketPrice: 90,
    role: "doctor",
    specialization: "Dermatologist",
    qualifications: ["MBBS", "MD Dermatology"],
    experiences: ["6 years in dermatology", "3 years as a skin specialist"],
    bio: "Expert dermatologist.",
    about:
      "Dr. Farid Uddin is a dermatologist providing treatments for a wide range of skin conditions.",
    timeSlots: [
      {
        day: "Saturday",
        date: "9:00 AM - 11:00 AM"
      },
      {
        day: "Sunday",
        date: "4:00 PM - 6:00 PM"
      }],
    reviews: [],
    averageRating: 4.8,
    totalRating: 272,
    isApproved: "approved",
    appointments: [],
    totalPatients: 1500,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
]
export const cardData = [
  {
    id: 1,
    title: "Individual Therapy Session",
    description: [
      "Online Counselling: One-on-one sessions with licensed psychologists for various mental health concers such as anxiety, depression, stress, and more.",
      "Specialized Thearpy: Therapy sesssions tailored to specific issues such as relationship counselling, grief counselling, and trauma recovery."
    ],
    image: service1,
    short_Title: "Individual Therapy",
    link:"/IndividualTherapyPrice",
    details: {
      questions: [
        {
          question: "What is Individual Therapy?",
          answer: "Individual therapy, also known as talk therapy or counseling, focuses on one-on-one sessions with a professional therapist. These sessions provide a confidential and supportive environment for you to explore your thoughts, emotions, and behaviors. Therapy is tailored to your specific needs and goals, whether you're navigating stress, processing trauma, managing mental health concerns, or simply striving for personal growth."
        },
        {
          question: "How Can Individual Therapy Help?",
          answer: [
            "Improved Emotional Well-being: Gain tools to manage stress, anxiety, depression, and other emotional challenges.",
            "Enhanced Self-awareness: Understand your thought patterns, emotions, and behaviors.",
            "Building Resilience: Develop coping mechanisms to navigate life&apos;s challenges.",
            "Stronger Relationships: Learn healthy communication skills to improve personal and professional relationships.",
            "Personal Growth: Explore your strengths and unlock your full potential."
          ]
        },
        {
          question: "Who Can Benefit from Individual Therapy?",
          answer: [
            "Emotional support during challenging times.",
            "Guidance for personal or professional struggles.",
            "Help in managing mental health conditions like anxiety, depression, or PTSD.",
            "Tools to process grief, trauma, or major life changes.",
            "Self-discovery and personal growth."
          ]
        },
        {
          question: "What to Expect in Individual Therapy Sessions?",
          answer: [
            "Confidentiality and Support: Your therapist provides a judgment-free, safe space for you to share openly.",
            "Goal Setting: Together, you'll identify your challenges and set achievable therapy goals.",
            "Personalized Approach: Sessions are tailored to your unique needs and progress at your own pace.",
            "Proven Techniques: Therapists may use evidence-based approaches such as Cognitive Behavioral Therapy (CBT), Psychodynamic Therapy, or Mindfulness practices."
          ]
        },
        {
          question: "Why Choose Freudia for Individual Therapy?",
          answer: [
            "Experienced Therapists: Work with licensed, empathetic professionals specializing in various concerns.",
            "Affordable Plans: We offer flexible pricing to ensure therapy is accessible to everyone.",
            "Convenient Options: Choose from in-person or online sessions based on your preference.",
            "Tailored to You: Personalized care designed to meet your specific needs and goals."
          ]
        }
      ]
    }
  }
  ,
  {
    id: 2,
    title: "Couples and Family Therapy",
    description: [
      "Couples Counselling: Therapy sessions aimed at improving communication, resolving conflicts, and strengthening relationships.",
      "Family Therapy: Therapy focused on improving family dynamics, resolving conflicts, and addressing collective mental health issues."
    ],
    image: service2,
    short_Title: "Couples Therapy",
    link:"/CoupleTherapyPrice",
    details: {
      questions: [
        {
          question: "What is Couples and Family Therapy?",
          answer: "Couples and Family Therapy is a specialized form of counseling designed to help individuals within a relationship or family improve communication, resolve conflicts, and create a healthier, more supportive environment. Whether you're navigating challenges in your romantic partnership or addressing dynamics within your family, therapy can provide the tools and strategies you need to foster understanding and connection."
        },
        {
          question: "Why Seek Couples and Family Therapy?",
          answer: [
            "Communication Breakdown: Address patterns of miscommunication and learn to express your needs effectively.",
            "Trust Issues: Rebuild trust after infidelity, secrecy, or other breaches of trust.",
            "Conflict Resolution: Resolve recurring arguments and reduce emotional tension.",
            "Parenting Challenges: Align parenting approaches and address concerns about raising children.",
            "Blended Families: Navigate the complexities of stepfamilies and co-parenting.",
            "Life Transitions: Adjust to significant life changes like marriage, divorce, relocation, or loss."
          ]
        },
        {
          question: "How Can Therapy Help?",
          answer: [
            "Identifying the root causes of conflicts.",
            "Developing healthy communication skills.",
            "Strengthening emotional bonds and intimacy.",
            "Creating actionable strategies to improve daily interactions.",
            "Understanding and respecting each other&apos;s perspectives."
          ]
        },
        {
          question: "What to Expect During Therapy?",
          answer: [
            "Conduct an initial assessment to understand your unique concerns and goals.",
            "Facilitate open and nonjudgmental conversations between all parties.",
            "Use evidence-based techniques like Emotionally Focused Therapy (EFT) or Cognitive Behavioral Therapy (CBT).",
            "Empower you with skills to continue growing outside of therapy sessions.",
            "Therapy sessions can be conducted in-person or online, depending on your preference."
          ]
        },
        {
          question: "Why Choose Us?",
          answer: [
            "Expert Therapists: Our licensed therapists have extensive experience in working with couples and families.",
            "Confidential and Supportive: Your privacy and comfort are our top priorities.",
            "Personalized Plans: We tailor our approach to your unique needs, ensuring that you get the most out of therapy.",
            "Flexible Scheduling: Evening and weekend appointments are available to suit your busy lifestyle."
          ]
        }
      ]
    }
  },

  {
    id: 3,
    title: "Child and Adolescent Therapy",
    description: [
      "Child and Adolescent Therapy: Specialized counseling that focuses on the emotional, behavioral, and psychological well-being of children and teenagers.",
      "Therapy helps young individuals navigate life's challenges, express their feelings, and develop coping strategies."
    ],
    image: service3,
    short_Title: "Child Adolescent",
    link:"/ChildTherapyPrice",
    details: {
      questions: [
        {
          question: "What is Child and Adolescent Therapy?",
          answer: "Child and Adolescent Therapy is a specialized form of counseling that focuses on the emotional, behavioral, and psychological well-being of children and teenagers. This type of therapy helps young individuals navigate life's challenges, express their feelings, and develop coping strategies in a safe and supportive environment."
        },
        {
          question: "Why Seek Therapy for Children and Adolescents?",
          answer: [
            "Emotional Struggles: Anxiety, depression, mood swings, or self-esteem issues.",
            "Behavioral Challenges: Aggression, defiance, or difficulties at school or home.",
            "Social Issues: Bullying, peer pressure, or trouble making friends.",
            "Family Changes: Divorce, relocation, or loss of a loved one.",
            "Trauma: Abuse, neglect, or witnessing traumatic events.",
            "Developmental Concerns: Learning disabilities, ADHD, or autism spectrum-related challenges."
          ]
        },
        {
          question: "How Therapy Can Help Your Child",
          answer: [
            "A safe space to share thoughts and feelings without judgment.",
            "Tools to cope with stress, manage emotions, and solve problems.",
            "Improved communication skills to express themselves effectively.",
            "Strategies for building self-esteem and resilience.",
            "Guidance to navigate life transitions and challenges with confidence."
          ]
        },
        {
          question: "What to Expect During Therapy",
          answer: [
            "Initial Assessment: A comprehensive evaluation of your child's needs, often involving parents or caregivers.",
            "Customized Approach: Use of age-appropriate, evidence-based techniques like Play Therapy, Cognitive Behavioral Therapy (CBT), or Art Therapy.",
            "Family Involvement: Guidance for parents or caregivers to reinforce progress made during therapy sessions.",
            "Continuous Support: Regular updates and feedback to track your child's growth and adjust strategies as needed."
          ]
        },
        {
          question: "Why Choose Us for Your Child's Therapy?",
          answer: [
            "Experienced Therapists: Our therapists specialize in working with children and teenagers, offering a deep understanding of developmental needs.",
            "Safe and Child-Friendly Environment: We create spaces where children feel comfortable expressing themselves.",
            "Tailored Therapy Plans: Each session is designed to meet your child's unique needs.",
            "Collaboration with Families: We work closely with parents to ensure lasting positive changes."
          ]
        },
        {
          question: "Signs Your Child May Benefit from Therapy",
          answer: [
            "Sudden changes in mood or behavior.",
            "Trouble sleeping or eating.",
            "Persistent sadness, worry, or withdrawal.",
            "Struggles with school performance or attendance.",
            "Difficulty forming or maintaining friendships.",
            "Expressing thoughts of self-harm or hopelessness."
          ]
        }
      ]
    }
  },

  {
    id: 4,
    title: "Mental Health Assessments",
    description: [
      "Psychological Assessments: Comprehensive assessments to diagnose mental health conditions, including personality assessments, IQ tests, and more.",
      "Diagnostic Screening: Online screening for mental health conditions like anxiety, depression, and ADHD."
    ],
    image: service4,
    short_Title: "Mental Health Assessment",
    link:"/MentalHealthAssessmentPrice",
    details: {
      questions: [
        {
          question: "Why Mental Health Assessments Matter",
          answer: "Understanding your mental health is the cornerstone of living a balanced and fulfilling life. Mental health assessments are designed to provide a clear picture of your emotional, psychological, and behavioral well-being. They help identify potential challenges, guide effective treatment plans, and empower you to take charge of your mental health. At Freudia, we offer comprehensive mental health assessments tailored to your unique needs, whether you're seeking clarity for yourself, a loved one, or professional purposes."
        },
        {
          question: "What is a Mental Health Assessment",
          answer: [
            "Screening for Mental Health Conditions: Identifying signs of anxiety, depression, ADHD, PTSD, and other mental health concerns.",
            "Evaluation of Emotional and Behavioral Patterns: Understanding how your thoughts, feelings, and behaviors impact your life.",
            "Strengths and Challenges Analysis: Pinpointing your personal strengths while addressing areas that may need support.",
            "Tailored Recommendations: Providing actionable steps for therapy, counseling, or other interventions based on the results."
          ]
        },
        {
          question: "Who Can Benefit from a Mental Health Assessment?",
          answer: [
            "Individuals Seeking Clarity: Experiencing stress, anxiety, or mood changes and unsure of their root cause. Seeking to improve overall emotional well-being.",
            "Parents Concerned About Their Child's Behavior: Understanding if your child is facing challenges like ADHD, learning difficulties, or anxiety.",
            "Couples and Families: Addressing relational dynamics that impact collective mental health.",
            "Students and Professionals: Managing academic or workplace stress. Enhancing focus, motivation, and coping mechanisms.",
            "Caregivers and Employers: Supporting loved ones or employees through structured evaluations."
          ]
        },
        {
          question: "Why Choose Freudia for Mental Health Assessments?",
          answer: [
            "Expert Professionals: Assessments conducted by licensed psychologists and counselors with extensive experience.",
            "Evidence-Based Tools: Use of scientifically validated methods to ensure accuracy and reliability.",
            "Comprehensive Reports: Receive detailed, easy-to-understand results with actionable recommendations.",
            "Confidential and Judgment-Free Environment: Your privacy and comfort are our utmost priority.",
            "Holistic Approach: Address mental, emotional, and social factors to create a complete wellness plan."
          ]
        }
      ]
    }
  },

  {
    id: 5,
    title: "Psychiatric Consultation",
    description: [
      "Online Psychiatric Services: Consultation with psychiatrists for medication management and treatment of more severe mental health conditions.",
      "Cognitive Behavioral Therapy (CBT): Structured, goal-oriented therapy focusing on changing negative thought patterns."
    ],
    image: service5,
    short_Title: "Psychiatric Consultation",
    link:"/PsychiatricConsultationPrice",
    details: {
      questions: [
        {
          question: "What is a Psychiatric Consultation?",
          answer: "A psychiatric consultation is a professional evaluation conducted by a licensed psychiatrist to assess and address your mental health needs. Psychiatrists are medical doctors who specialize in diagnosing, treating, and preventing mental health disorders. With their expertise, they provide comprehensive care that may include therapy, medication management, and lifestyle recommendations tailored to your unique situation."
        },
        {
          question: "Why Consider a Psychiatric Consultation?",
          answer: [
            "Accurate Diagnosis: Identify conditions like depression, anxiety, bipolar disorder, PTSD, schizophrenia, ADHD, and more.",
            "Customized Treatment Plans: Develop personalized strategies for managing symptoms effectively.",
            "Medication Management: Expert guidance on whether medication is needed and how it fits into your overall treatment plan.",
            "Support During Life Transitions: Navigate significant changes, such as grief, trauma, or career challenges, with professional support."
          ]
        },
        {
          question: "What to Expect During a Consultation",
          answer: [
            "Initial Evaluation: Discuss your concerns, symptoms, medical history, and any previous mental health treatments.",
            "Comprehensive Assessment: Use of evidence-based tools and techniques to understand your mental, emotional, and physical well-being.",
            "Diagnosis and Recommendations: Provide a clear diagnosis (if applicable) and outline potential treatment options, such as therapy, medication, or lifestyle changes.",
            "Collaborative Planning: Work with you to create a treatment plan that aligns with your goals and preferences."
          ]
        },
        {
          question: "Who Should Consider a Psychiatric Consultation?",
          answer: [
            "Individuals with Persistent Symptoms: Experiencing ongoing sadness, anxiety, fatigue, or irritability.",
            "Those Seeking Medication Guidance: Unsure if medication is needed or seeking a review of current prescriptions.",
            "People Facing Acute Mental Health Crises: Coping with trauma, suicidal thoughts, or sudden changes in behavior.",
            "Families and Caregivers: Supporting a loved one with mental health challenges.",
            "Children and Adolescents: Addressing developmental, behavioral, or emotional concerns with professional expertise."
          ]
        },
        {
          question: "Conditions We Address",
          answer: [
            "Depression and mood disorders",
            "Anxiety and panic disorders",
            "Bipolar disorder",
            "Post-Traumatic Stress Disorder (PTSD)",
            "Attention-Deficit/Hyperactivity Disorder (ADHD)",
            "Obsessive-Compulsive Disorder (OCD)",
            "Psychotic disorders (e.g., schizophrenia)",
            "Substance use disorders",
            "Sleep disturbances and insomnia"
          ]
        },
        {
          question: "Why Choose Freudia for Psychiatric Consultations?",
          answer: [
            "Expert Psychiatrists: Our team of licensed professionals has years of experience in mental health care.",
            "Personalized Attention: Each consultation is tailored to your specific needs and concerns.",
            "Seamless Integration: Collaborate with our therapists and counselors for a well-rounded treatment plan.",
            "Convenient Options: Access consultations both in-person and online for flexibility and ease.",
            "Confidential and Secure: Your privacy is our priority, ensuring a safe and comfortable environment."
          ]
        }
      ]
    }
  },

  {
    id: 6,
    title: "Corporate Wellness Programs",
    description: [
      "Employee Assistance Programs (EAP): Mental health services for companies, including individual counseling, workshops, and mental resources for employees.",
      "Workshops and seminars: Educational Sessions on topics like stress management, work-life balance, and mental health awareness."
    ],
    image: service6,
    short_Title: "Wellness Programs",
    link:"/DiscountPrice",
    details: {
      questions: [
        {
          question: "What Are Corporate Wellness Programs?",
          answer: "Corporate wellness programs are structured initiatives designed to improve the mental, emotional, and physical health of employees. These programs not only enhance individual well-being but also foster a supportive and productive workplace environment. At Freudia, we understand the unique challenges faced by modern workplaces and offer tailored wellness solutions to promote a thriving workforce."
        },
        {
          question: "Why Corporate Wellness Matters",
          answer: [
            "Enhanced Productivity: Improved focus, energy levels, and performance at work.",
            "Reduced Absenteeism: Fewer sick days and a more consistent workforce.",
            "Improved Morale: A happier, more engaged, and motivated team.",
            "Lower Turnover Rates: Increased job satisfaction and employee retention.",
            "Cost Savings: Reduced healthcare costs and better management of workplace stress."
          ]
        },
        {
          question: "Our Corporate Wellness Services",
          answer: [
            "Mental Health Workshops and Seminars: Topics include stress management, mindfulness, emotional resilience, and conflict resolution.",
            "One-on-One Counseling Sessions: Confidential sessions with licensed therapists for employees needing individual support.",
            "Leadership Coaching: Empower managers and leaders with tools to foster a positive work culture.",
            "Team-Building Activities: Group sessions focused on collaboration, empathy, and communication.",
            "Stress-Relief Programs: Yoga, meditation, and relaxation techniques to manage workplace stress.",
            "Employee Assistance Programs (EAPs): Comprehensive support for mental health, family issues, financial advice, and more.",
            "Health and Wellness Assessments: Evaluate the overall well-being of your workforce and identify areas for improvement.",
            "Crisis Intervention Services: Immediate support for employees during organizational changes, traumatic events, or emergencies."
          ]
        },
        {
          question: "How Our Programs Work",
          answer: [
            "Initial Assessment: We assess your organization&apos;s wellness needs through surveys, interviews, and focus groups.",
            "Customized Plan: Develop a wellness strategy aligned with your goals and culture.",
            "Implementation: Deliver workshops, training, and ongoing support based on the agreed plan.",
            "Monitoring and Feedback: Track progress through regular evaluations and adjust programs as needed."
          ]
        },
        {
          question: "Benefits of Partnering with Freudia",
          answer: [
            "Tailored Solutions: Programs designed to meet the specific needs of your organization and workforce.",
            "Expert Professionals: Access to licensed therapists, psychologists, and wellness coaches.",
            "Flexible Delivery Modes: In-person, virtual, or hybrid sessions to suit your team's preferences.",
            "Confidential Support: Ensuring a safe space for employees to seek help without fear of stigma.",
            "Proven Outcomes: Evidence-based approaches backed by measurable results in workplace well-being."
          ]
        }
      ]
    }
  },

  {
    id: 7,
    title: "Group Therapy",
    description: [
      "Freudia's Group Therapy program offers a collaborative and supportive environment where individuals with similar mental health challenges come together to share experiences, gain insights, and learn coping strategies under the guidance of a professional therapist.",
      "Group Therapy provides a space where participants can feel understood, build connections, and improve their mental well-being through shared experiences and collective support."
    ],
    image: service7,
    short_Title: "Group Therapy",
    link:"/GroupTherapyPrice",
    details: {
      questions: [
        {
          question: "What is Group Therapy?",
          answer: "Group therapy is a form of psychotherapy where individuals with similar challenges come together to share their experiences, provide support, and work toward emotional growth under the guidance of a licensed therapist. This collaborative approach fosters a sense of community, helping participants realize they are not alone in their struggles."
        },
        {
          question: "Who Can Benefit from Group Therapy?",
          answer: [
            "Anxiety and depression",
            "Grief and loss",
            "Stress management",
            "Addiction recovery",
            "Relationship challenges",
            "Trauma and PTSD",
            "Low self-esteem or confidence issues"
          ]
        },
        {
          question: "How Does Group Therapy Work?",
          answer: [
            "Safe and Confidential Setting: Participants meet in a confidential and supportive space, facilitated by a trained therapist who ensures everyone feels comfortable.",
            "Shared Experiences: Hearing others' stories helps participants realize they are not alone, fostering empathy and mutual understanding.",
            "Therapist Guidance: The therapist guides discussions, introduces therapeutic exercises, and ensures the group stays on track.",
            "Peer Support: Group members provide encouragement, feedback, and perspective to each other, creating a network of support."
          ]
        },
        {
          question: "Benefits of Group Therapy",
          answer: [
            "Gain Perspective: Hearing how others handle similar challenges can offer new insights and coping strategies.",
            "Build Connections: Group therapy reduces feelings of isolation by creating a sense of belonging and community.",
            "Develop Social Skills: Participants can practice communication, conflict resolution, and interpersonal skills in a safe environment.",
            "Cost-Effective: Group therapy is often more affordable than individual sessions while providing high-quality care.",
            "Boost Confidence: Sharing your story and receiving support can increase self-esteem and help you develop resilience."
          ]
        },
        {
          question: "What Happens in a Group Therapy Session?",
          answer: [
            "Introductions: Each member is encouraged to share their current feelings or experiences.",
            "Focused Discussion: The group explores a central theme or topic, such as managing stress or navigating relationships.",
            "Skill-Building Exercises: Participants practice techniques like mindfulness, self-reflection, or assertive communication.",
            "Feedback and Support: Members provide constructive feedback and encouragement to one another."
          ]
        },
        {
          question: "Why Choose Freudia for Group Therapy?",
          answer: [
            "Expert Facilitators: Our therapists are trained to create a supportive and inclusive environment.",
            "Diverse Groups: Whether you're an individual, a couple, or part of a specific community, we have a group for you.",
            "Flexible Options: Choose from in-person or online group sessions to suit your schedule.",
            "Affordable Rates: High-quality therapy at prices starting as low as ₹250 per session.",
            "Inclusive Environment: Welcoming individuals from all backgrounds, genders, and age groups."
          ]
        },
        {
          question: "Is Group Therapy Right for You?",
          answer: [
            "Feel isolated and want to connect with others.",
            "Need a space to share and process your emotions.",
            "Want to learn from others facing similar challenges.",
            "Are open to giving and receiving feedback in a supportive environment."
          ]
        }
      ]
    }
  },

  {
    id: 8,
    title: "Therapy For Students",
    description: [
      "Freudia's Therapy for Students program is designed to provide mental health support tailored to the unique challenges faced by students across all educational levels.",
      "The program focuses on ensuring that students have access to affordable, personalized, and confidential therapy services to help them cope with academic stress, life transitions, and personal struggles."
    ],
    image: service8,
    short_Title: "StudentTherapy",
    link:"/StudentsTherapyPrice",
    details: {
      questions: [
        {
          question: "Why is Therapy Important for Students?",
          answer: [
            "Manage academic stress and burnout.",
            "Navigate peer and family relationships.",
            "Cope with anxiety, depression, or self-esteem issues.",
            "Build confidence in decision-making and problem-solving.",
            "Address personal struggles like identity, purpose, or future planning."
          ]
        },
        {
          question: "Common Challenges Faced by Students",
          answer: [
            "Academic Pressure: Deadlines, competitive exams, and performance anxiety.",
            "Mental Health Concerns: Increased cases of anxiety, depression, and self-doubt.",
            "Peer Pressure: Struggles with fitting in, bullying, or social media influences.",
            "Family Expectations: Balancing independence with familial obligations and expectations.",
            "Transition Phases: Adjusting to college, moving away from home, or entering the workforce."
          ]
        },
        {
          question: "How Can Therapy Help Students?",
          answer: [
            "Build Emotional Resilience: Therapists guide students in identifying and managing emotions, helping them bounce back from setbacks with a positive outlook.",
            "Enhance Time Management and Study Skills: Therapy equips students with strategies to manage time effectively and handle academic workload.",
            "Develop Healthy Coping Mechanisms: Learn how to deal with stress, anxiety, or conflict in a constructive and empowering way.",
            "Explore Personal Growth: Therapy provides a safe space for students to understand themselves better, work on self-esteem, and clarify their goals and values.",
            "Support Mental Health Conditions: Licensed professionals can address concerns like anxiety, depression, ADHD, or trauma through evidence-based techniques such as Cognitive Behavioral Therapy (CBT) or mindfulness practices."
          ]
        },
        {
          question: "Why Choose Freudia for Student Therapy?",
          answer: [
            "Affordable Sessions: Therapy starting at just ₹250/session to make mental health care accessible to all students.",
            "Flexible Scheduling: Evening and weekend slots to accommodate your busy study schedule.",
            "Expert Therapists: Trained professionals specializing in student mental health and academic stress.",
            "Confidential and Judgment-Free: We provide a safe space where students can express themselves openly without fear.",
            "Online and In-Person Options: Choose what works best for you."
          ]
        },
        {
          question: "Signs a Student May Need Therapy",
          answer: [
            "Difficulty concentrating or staying motivated.",
            "Persistent feelings of sadness, anxiety, or hopelessness.",
            "Struggles with self-esteem or body image.",
            "Trouble managing relationships with friends, family, or teachers.",
            "Unhealthy coping habits like procrastination or substance use."
          ]
        }
      ]
    }
  },

  {
    id: 9,
    title: "Therapy For Farmers (Rural Outreach)",
    description: [
      "Offering affordable and accessible therapy for farmers in rural areas to address mental health challenges specific to their lives.",
      "Freudia's Farmers and Rural Outreach Program is designed to address the unique mental health needs of farmers and individuals living in rural communities, providing them with affordable, accessible, and culturally sensitive therapy services."
    ],
    image: service9,
    short_Title: "FarmersTherapy",
    link:"/DiscountPrice",
    details: {
      questions: [
        {
          question: "Why Mental Health Support is Crucial for Farmers?",
          answer: [
            "Stress caused by financial uncertainty and crop failures.",
            "Anxiety from changing climate conditions and market instability.",
            "Depression stemming from isolation or feelings of helplessness.",
            "Strained family relationships due to work-life imbalance.",
            "Grief and trauma related to loss of land, animals, or loved ones."
          ]
        },
        {
          question: "Challenges Faced by Farmers",
          answer: [
            "Financial Struggles: Fluctuating crop prices, debt burdens, and rising operational costs.",
            "Unpredictable Conditions: Dependence on weather, pest control, and market volatility.",
            "Social Isolation: Long working hours and remote living often limit social connections.",
            "Stigma Around Mental Health: Hesitation to seek help due to cultural or societal taboos.",
            "Family Responsibilities: Balancing farm duties with family and household needs."
          ]
        },
        {
          question: "How Therapy Can Help Farmers?",
          answer: [
            "Manage Stress and Anxiety: Therapists teach practical coping strategies to handle stress related to farming demands, deadlines, and uncertainties.",
            "Improve Decision-Making Skills: Through therapy, farmers can learn to think more clearly and make confident choices during challenging situations.",
            "Strengthen Relationships: Family or group therapy can address communication breakdowns and foster understanding within farming families.",
            "Build Emotional Resilience: Therapy helps farmers develop tools to navigate setbacks, whether they are financial, personal, or professional.",
            "Address Mental Health Concerns: Licensed professionals can diagnose and treat conditions like depression, PTSD, and anxiety through evidence-based approaches."
          ]
        },
        {
          question: "Why Choose Freudia for Farmer Therapy?",
          answer: [
            "Affordable Care: Sessions starting at ₹250 to ensure mental health support is accessible for all.",
            "Specialized Therapists: Experts who understand the unique challenges faced by farmers and agricultural workers.",
            "Flexible Options: Choose between online therapy or in-person sessions at nearby centers.",
            "Confidential and Judgment-Free: A safe space to share without stigma or judgment.",
            "Community Support Groups: Connect with fellow farmers who understand your struggles."
          ]
        },
        {
          question: "Signs That a Farmer May Need Therapy",
          answer: [
            "Persistent feelings of sadness or hopelessness.",
            "Difficulty concentrating or making decisions.",
            "Strained relationships with family or coworkers.",
            "Unexplained physical symptoms like fatigue or headaches.",
            "Withdrawal from social activities or reluctance to seek help."
          ]
        }
      ]
    }
  },

  {
    id: 10,
    title: "Career Counselling",
    description: [
      "Freudia is expanding its services to include Career Counselling, a vital offering that helps individuals navigate their career paths, make informed decisions, and overcome challenges in the professional world.",
      "This service is designed for people of all ages, whether they are students planning their future careers, mid-career professionals seeking a change, or individuals looking to enhance their job satisfaction and personal growth."
    ],
    image: service10,
    short_Title: "CareerCounselling",
    link:"/CareerCounsellingPrice",
    details: {
      questions: [
        {
          question: "Why is Career Counseling Important?",
          answer: [
            "Understand Your Strengths: Identify your skills, interests, and personality traits to find the perfect career fit.",
            "Set Realistic Goals: Map out actionable steps to achieve short-term and long-term objectives.",
            "Adapt to Change: Stay resilient in the face of industry shifts, job transitions, or new challenges.",
            "Boost Confidence: Make well-informed decisions with expert guidance and support."
          ]
        },
        {
          question: "Who Can Benefit from Career Counseling?",
          answer: [
            "Students: Explore career options, choose the right academic path, and prepare for future opportunities.",
            "Fresh Graduates: Gain clarity on job prospects and strategies to kickstart your career.",
            "Working Professionals: Navigate workplace challenges, seek promotions, or pivot to a new career.",
            "Career Changers: Transition smoothly into a new field with expert advice and planning."
          ]
        },
        {
          question: "Benefits of Career Counseling",
          answer: [
            "Clarity of Direction: Gain insight into what career path suits you best.",
            "Goal Setting: Set achievable milestones that pave the way to success.",
            "Improved Decision-Making: Make informed choices about education, jobs, and career transitions.",
            "Confidence Boost: Feel more equipped to handle challenges and pursue opportunities.",
            "Market Insights: Stay updated with trends, in-demand skills, and emerging industries."
          ]
        },
        {
          question: "Common Topics Addressed in Career Counseling",
          answer: [
            "Choosing the right stream or major in school or college.",
            "Navigating career transitions or mid-life career changes.",
            "Exploring job opportunities in high-demand industries.",
            "Improving workplace dynamics and communication skills.",
            "Balancing work-life priorities for better productivity."
          ]
        },
        {
          question: "What to Expect in Career Counseling?",
          answer: [
            "Assessment and Exploration: Personality and aptitude tests to understand your skills and interests. Career mapping to identify potential options that align with your goals.",
            "Guidance and Planning: Personalized advice to choose the right educational or professional path. Strategies to achieve your career aspirations step by step.",
            "Skill Development: Training in communication, leadership, and other essential professional skills. Resume building, interview preparation, and job search techniques.",
            "Support and Encouragement: Overcome doubts, fears, or uncertainties with professional support. Continuous guidance to adapt to changes and seize opportunities."
          ]
        }
      ]
    }
  },

  {
    id: 11,
    title: "Crisis Intervention (Emergency Therapy)",
    description: [
      "Crisis Intervention or Emergency Therapy is a critical mental health service that helps individuals experiencing immediate emotional distress, often resulting from trauma, a life crisis, or overwhelming stress.",
      "These types of interventions are designed to provide urgent psychological support, stabilize emotional states, and prevent further escalation of mental health crises."
    ],
    image: service11,
    short_Title: "EmergencyTherapy",
    link:"/EmergencyTherapyPrice",
    details: {
      questions: [
        {
          question: "What is Crisis Intervention?",
          answer: [
            "Crisis intervention, or emergency therapy, is a short-term, focused approach to provide immediate psychological support during a crisis.",
            "This type of therapy is designed to stabilize individuals, help them cope with intense emotional distress, and restore a sense of safety and control.",
            "Crisis situations may include: sudden loss or grief, experiencing or witnessing trauma, suicidal thoughts or self-harm, acute mental health episodes like panic attacks or psychosis, relationship breakdowns or domestic violence, and workplace harassment or severe stress."
          ]
        },
        {
          question: "When to Seek Crisis Intervention?",
          answer: [
            "It's crucial to seek emergency therapy if you or someone you know is struggling with overwhelming emotions that feel unmanageable.",
            "Experiencing thoughts of self-harm or harm to others.",
            "Facing a traumatic event and finding it difficult to cope.",
            "Feeling stuck, hopeless, or out of control."
          ]
        },
        {
          question: "How Crisis Intervention Can Help?",
          answer: [
            "Immediate Relief: Address acute distress with compassion and care. Provide tools to de-escalate emotional or psychological crises.",
            "Stabilization: Identify immediate safety concerns and create a crisis plan. Build emotional grounding and a sense of control.",
            "Guidance and Support: Offer a safe space to express emotions without judgment. Connect you to resources for ongoing support, such as therapy or community services.",
            "Problem-Solving: Focus on immediate challenges and provide actionable steps. Break down overwhelming situations into manageable parts."
          ]
        },
        {
          question: "Benefits of Crisis Intervention Therapy",
          answer: [
            "Emotional Relief: Gain immediate relief from intense emotional pain or confusion.",
            "Restoration of Safety: Feel safe and supported during moments of vulnerability.",
            "Skill Development: Learn coping mechanisms to handle future crises effectively.",
            "Resource Access: Connect with the right professionals and services for continued care."
          ]
        },
        {
          question: "What Makes Crisis Intervention Different from Regular Therapy?",
          answer: [
            "Focus on Immediate Needs: Unlike traditional therapy, crisis intervention addresses short-term needs and safety concerns.",
            "Action-Oriented Approach: Sessions focus on de-escalating emotions and creating actionable plans.",
            "Short Duration: Most crisis interventions are brief, lasting 1-6 sessions, depending on the situation."
          ]
        },
        {
          question: "How Freudia Supports You in a Crisis?",
          answer: [
            "24/7 Emergency Access: Our trained therapists are available to provide immediate assistance.",
            "Compassionate and Confidential Care: Speak with professionals who listen without judgment.",
            "Trauma-Informed Approach: Specialized care for trauma survivors, ensuring safety and sensitivity.",
            "Follow-Up Support: Help transitioning from crisis intervention to ongoing therapy."
          ]
        }
      ]
    }
  },

  {
    id: 12,
    title: "Life Coaching For Terminal Illness",
    description: [
      "Freudia offers Life Coaching for individuals facing serious health conditions, such as cancer or other terminal illness.",
      "This service is ideal to provide emotional and psychological support to individuals who may be grappling with a life-limiting diagnosis or chronic health condition, helping them mentally prepare and navigate the emotional challenges that come with such diagnoses."
    ],
    image: service12,
    short_Title: "LifeCoaching",
    link:"/LifeCoachingPrice",
    details: {
      questions: [
        {
          question: "What is Life Coaching for Terminal Illness?",
          answer: [
            "Life coaching for terminal illness is a supportive, forward-focused process designed to help individuals:",
            "Cope with the emotional challenges of a terminal diagnosis.",
            "Rediscover meaning and joy in life.",
            "Foster resilience and acceptance.",
            "Set goals that align with personal values and desires.",
            "Strengthen connections with loved ones.",
            "This is not a replacement for therapy or medical care but a complementary resource to help you focus on living fully and intentionally."
          ]
        },
        {
          question: "Who Can Benefit from Life Coaching for Terminal Illness?",
          answer: [
            "Individuals Diagnosed with a Terminal Illness:",
            "Find clarity and peace while navigating emotional and practical challenges.",
            "Create a meaningful legacy for loved ones.",
            "Caregivers and Family Members:",
            "Learn to provide support while managing their own emotions.",
            "Strengthen relationships and communication during this critical time.",
            "Anyone Seeking Guidance During End-of-Life Planning:",
            "Address unresolved personal or family matters.",
            "Build emotional resilience and leave a positive impact."
          ]
        },
        {
          question: "How Life Coaching Can Help You",
          answer: [
            "Emotional Support and Perspective: Process fears, grief, and emotions in a safe, judgment-free space. Reframe challenges to focus on what's meaningful to you.",
            "Goal Setting for Fulfillment: Identify what truly matters—spending time with loved ones, achieving personal dreams, or leaving a legacy. Break goals into manageable steps to create a sense of accomplishment.",
            "Strengthening Relationships: Improve communication with family and friends to foster understanding and closeness. Resolve conflicts or misunderstandings that weigh on your heart.",
            "Practical Guidance: Explore tools for effective end-of-life planning (e.g., legacy letters, memory projects). Manage daily priorities to reduce overwhelm and stress.",
            "Mindfulness and Resilience Building: Practice techniques to stay grounded and present, even in difficult moments. Cultivate gratitude and find peace amidst uncertainty."
          ]
        },
        {
          question: "Why Choose Freudia for Life Coaching?",
          answer: [
            "Compassionate Coaches: Our life coaches are trained to provide sensitive, empathetic support tailored to your needs.",
            "Holistic Approach: We address emotional, practical, and relational aspects of navigating terminal illness.",
            "Flexible Options: Sessions can be conducted online or in person, allowing you to choose what's most comfortable.",
            "Family-Inclusive Coaching: Option to involve loved ones for collaborative support and understanding."
          ]
        }
      ]
    }
  },
];

export const assets = {
  process,
  man,leaves,
  homepage,
  homepage2,
  screen,
  therapist,
  formImage,
  freudiaLogo,
  textureImg,
  logo,
  homelogo,
  lightburst,
  therapistOne,
  therapistTwo,
  therapistThree,
  therapistFour,
  therapistFive,
  therapistSix,
  therapistSeven,
  lineSquiggle,
  eatingDisorder,
  lineburst,
  arrowgreen2,
  logoicon,
  info,
  profileIcon,
  student,
  farmer,
  farmerherobg,
  scrollDown,
  sadfarmer,
  farmer2Img,
  farmerSignin,
  fbgtry,
  bgfarm1,
  grassbgtry,
  studentBg,
  studentBg2,
  student1,
  student2,
  studentSIgnup,
  user,
  studentLogin,
  userIcon,
  studentIcon,
  farmerIcon,
  userNavIcon,
  studentNavIcon,
  doctorImg01,
  doctorImg02,
  doctorImg03,
  signup
};

export const mentalHealthGroups = [
  {
    id: 0,
    title: "Anxiety Relief Group",
    members: 75,
    description:
      "A safe space for people experiencing anxiety to share their feelings and coping mechanisms.",
    goals:
      "Provide emotional support, share stress-relief techniques, and build resilience.",
    for: "People struggling with chronic anxiety.",
    topics: "Coping strategies, mindfulness practices, and stress management.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their experiences managing anxiety and learning coping strategies.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Emotional support from peers to alleviate anxiety-related distress.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to mindfulness techniques, therapy options, and stress management resources.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussions on balancing stress, managing panic attacks, and long-term mental stability.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Anxiety",
        description: "Anyone dealing with chronic anxiety.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Those supporting someone with anxiety can join to learn how to provide help.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Weekly group discussions on managing anxiety triggers and building resilience.",
      expertSessions:
        "Expert-led sessions on anxiety treatment and management options.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1683284355176-0424e1f62468?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFueGlldHklMjByZWxpZWZ8ZW58MHwwfDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 1,
    title: "Depression Support Circle",
    members: 120,
    description:
      "An uplifting community for individuals dealing with depression.",
    goals: "Provide peer support and encourage emotional healing.",
    for: "People suffering from depression.",
    topics:
      "Emotional challenges, treatment experiences, and hope for recovery.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their journeys with depression to find common ground and understanding.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive space to uplift one another through recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Providing educational resources on managing depressive symptoms and effective treatments.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Focusing on self-care routines and maintaining emotional balance.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Depression",
        description:
          "Anyone battling depression, whether newly diagnosed or long-term sufferers.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Caregivers can join to gain insights into supporting someone with depression.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Weekly discussions focusing on managing depressive episodes and promoting emotional healing.",
      expertSessions:
        "Occasional guest sessions with mental health professionals on depression treatment and recovery.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1539541417736-3d44c90da315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbiUyMHN1cHBvcnR8ZW58MHwwfDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 2,
    title: "Bipolar Balance Network",
    members: 65,
    description:
      "The Bipolar Balance Network is a support group created to help individuals navigating the complexities of bipolar disorder. This group is designed to provide a safe space where members can connect, share experiences, and gain insight into managing the highs and lows associated with this condition.",
    goals: "Foster understanding and stability.",
    for: "The primary goal of the Bipolar Balance Network is to foster a supportive environment for people living with bipolar disorder, as well as their loved ones and caregivers. By sharing personal stories, coping strategies, and wellness tips, members can find comfort and understanding from those facing similar challenges.",
    topics: "Medication management, mood swings, and self-care routines.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their personal journeys with bipolar disorder, allowing others to learn from different perspectives.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "The group offers emotional support, helping members feel less isolated in their struggles and more empowered in their recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to reliable information on managing bipolar symptoms, treatment options, and wellness practices, such as mood tracking, medication adherence, and therapy options.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussions on the balance between manic and depressive episodes, managing medication, and maintaining mental stability.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Bipolar Disorder",
        description:
          "Whether newly diagnosed or experienced in managing the disorder, anyone living with bipolar disorder is welcome.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Those supporting someone with bipolar disorder can also join to learn and share how best to provide care and understanding.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Regular group chats on specific topics, such as coping with manic episodes, dealing with stigma, or building supportive relationships.",
      expertSessions:
        "Occasionally, mental health professionals may be invited to share their expertise on managing bipolar disorder.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1652125158952-475247c6f116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymlwb2xhciUyMGRpc29yZGVyfGVufDB8MHwwfHx8MA%3D%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 3,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 4,
    title: "PTSD Healing Group",
    members: 60,
    description:
      "A supportive group for individuals recovering from trauma and PTSD.",
    goals: "Offer a secure space for trauma processing and healing.",
    for: "People suffering from post-traumatic stress disorder.",
    topics: "Trauma triggers, recovery stories, and coping tools.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description: "Members share their stories of trauma and recovery.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive space for trauma survivors to discuss coping strategies.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapy and recovery tools, including trauma-informed care.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Managing trauma triggers and learning how to regain control over emotions.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with PTSD",
        description: "Anyone experiencing trauma or PTSD.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Family and friends of those with PTSD are welcome.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group talks on processing trauma and building healthy routines.",
      expertSessions:
        "Sessions with trauma-informed therapists on healing from PTSD.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHRzZCUyMGhlYWxpbmd8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 5,
    title: "Eating Disorder Recovery Group",
    members: 100,
    description:
      "A group focused on providing support for individuals recovering from eating disorders.",
    goals: "Encourage healthy eating habits and body positivity.",
    for: "Individuals struggling with anorexia, bulimia, or binge eating.",
    topics: "Body image, relationship with food, and self-worth.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members discuss their struggles with eating disorders and share recovery journeys.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A non-judgmental space for individuals working toward recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Nutrition education and mental health resources for managing disordered eating.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies for maintaining healthy eating habits and addressing emotional triggers.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Eating Disorders",
        description: "People recovering from or dealing with eating disorders.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Family and friends of individuals with eating disorders.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Open discussions on body image, food, and emotional health.",
      expertSessions:
        "Sessions with dieticians and mental health professionals on recovery strategies.",
    },
    isPublic: true,
    image_url:
      "https://plus.unsplash.com/premium_photo-1664302425309-ba34d06d97c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWF0aW5nJTIwZGlzb3JkZXJ8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 6,
    title: "Addiction Support Network",
    members: 150,
    description:
      "A recovery group for those struggling with addiction to substances or behaviors.",
    goals: "Provide support and resources to help individuals stay sober.",
    for: "People in recovery from substance abuse or addiction.",
    topics: "Addiction recovery, staying sober, and relapse prevention.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their experiences with addiction and recovery.",
        },
        {
          heading: "Support and Encouragement",
          description: "Support in staying sober and managing cravings.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to recovery programs, resources, and strategies for preventing relapse.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussion on maintaining mental and emotional health during recovery.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Addictions",
        description: "Those struggling with or in recovery from addiction.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals in addiction recovery.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Open discussions on managing cravings and avoiding triggers.",
      expertSessions:
        "Sessions with addiction specialists on relapse prevention.",
    },
    isPublic: false,
    image_url:
      "https://plus.unsplash.com/premium_photo-1689604956095-744e38047f9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWRkaWN0aW9ufGVufDB8fDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 7,
    title: "Grief Support Circle",
    members: 40,
    description:
      "A safe community for those dealing with the pain of loss and grief.",
    goals: "Provide comfort, emotional support, and healing after loss.",
    for: "Individuals grieving the loss of a loved one.",
    topics: "Processing grief, emotional healing, and finding closure.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their stories of loss and how they are coping with grief.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive environment for emotional healing and comfort.",
        },
        {
          heading: "Education and Resources",
          description:
            "Access to grief counseling and support resources for emotional healing.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Discussions on managing emotions and finding closure after loss.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals Grieving",
        description: "Anyone grieving the loss of a loved one.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals dealing with grief.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions: "Open talks on coping with grief and emotional pain.",
      expertSessions:
        "Sessions with grief counselors on emotional healing and finding closure.",
    },
    isPublic: true,
    image_url:
      "https://images.unsplash.com/photo-1484973768669-7fb6b5451095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdyaWVmJTIwU3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 8,
    title: "Depression Support Circle",
    members: 120,
    description:
      "An uplifting community for individuals dealing with depression.",
    goals: "Provide peer support and encourage emotional healing.",
    for: "People suffering from depression.",
    topics:
      "Emotional challenges, treatment experiences, and hope for recovery.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their journeys with depression to find common ground and understanding.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "A supportive space to uplift one another through recovery.",
        },
        {
          heading: "Education and Resources",
          description:
            "Providing educational resources on managing depressive symptoms and effective treatments.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Focusing on self-care routines and maintaining emotional balance.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with Depression",
        description:
          "Anyone battling depression, whether newly diagnosed or long-term sufferers.",
      },
      {
        category: "Caregivers and Loved Ones",
        description:
          "Caregivers can join to gain insights into supporting someone with depression.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Weekly discussions focusing on managing depressive episodes and promoting emotional healing.",
      expertSessions:
        "Occasional guest sessions with mental health professionals on depression treatment and recovery.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1539541417736-3d44c90da315?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbiUyMHN1cHBvcnR8ZW58MHwwfDB8fHww",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 9,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 10,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 12,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
    createdBy: {
      $oid: "670bc726d523ed9e57fd1b13",
    },
    members: [],
    createdAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    updatedAt: {
      $date: "2024-11-06T14:02:15.906Z",
    },
    __v: 0,
  },
  {
    id: 13,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    title: "OCD Recovery Group",
    members: 85,
    description:
      "A space for those with OCD to connect and learn new coping techniques.",
    goals:
      "Share therapeutic approaches and reduce OCD&apos;s impact on daily life.",
    for: "People with obsessive-compulsive disorder.",
    topics: "Managing compulsions, thoughts, and rituals.",
    groupFocus: {
      name: "Group Focus",
      points: [
        {
          heading: "Shared Experiences",
          description:
            "Members share their struggles with OCD to help others understand its impact.",
        },
        {
          heading: "Support and Encouragement",
          description:
            "Group support for navigating daily life and managing intrusive thoughts.",
        },
        {
          heading: "Education and Resources",
          description:
            "Resources on therapeutic methods, like CBT, for reducing compulsions.",
        },
        {
          heading: "Mental Health Management",
          description:
            "Strategies to manage rituals and reduce the impact of compulsive behavior.",
        },
      ],
    },
    whoCanJoin: [
      {
        category: "Individuals with OCD",
        description:
          "Those with OCD, regardless of the severity of their symptoms.",
      },
      {
        category: "Caregivers and Loved Ones",
        description: "Supporters of individuals with OCD are welcome to join.",
      },
    ],
    meetingStructure: {
      weeklyDiscussions:
        "Group discussions on breaking compulsive behavior patterns.",
      expertSessions: "Sessions with specialists in OCD therapy techniques.",
    },
    isPublic: false,
    image_url:
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2NkJTIwcmVjb3Zlcnl8ZW58MHx8MHx8fDA%3D",
  },
];

export const therapyOptions = [
  {
    id: 1,
    name: "Individual",
    desc: "For myself",
    defaultImg: individualDefault,
    movementImg: individualMovement,
    bgColor: "#007481",
  },
  {
    id: 2,
    name: "Couples",
    desc: "For me and my partner",
    defaultImg: coupleDefault,
    movementImg: coupleMovement,
    bgColor: "#00a6c7",
  },
  {
    id: 3,
    name: "Teen",
    desc: "For my child",
    defaultImg: teenDefault,
    movementImg: teenMovement,
    bgColor: "#ffb304",
  },
];

export const steps = [
  {
    title: "Get matched to the best therapist for you",
    desc: "Answer a few questions to find a credentialled therapist who fits your needs and preferences. Tap into the largest network of credentialled providers.",
    image: howitworks1,
  },
  {
    title: "Communicate your way",
    desc: "Talk to your therapist however you feel comfortable — text, chat, phone, or video.",
    image: howitworks2,
  },
  {
    title: "Therapy when you need it",
    desc: "You can message your therapist at anytime, from anywhere. You also get to schedule live sessions when it's convenient for you, and can connect from any mobile device or computer.",
    image: howitworks3,
  },
];

export const therapyComparison = [
  {
    feature: "Provided by a credentialled therapist",
    betterHelp: true,
    inOffice: { result: true, nan: false },
    info: "Provided by licensed professionals",
    faq: "All therapists are credentialled with relevant experience and qualifications for their respective professional organizations",
  },
  {
    feature: "In-office visits",
    betterHelp: false,
    inOffice: { result: true, nan: false },
    info: "Physical visits to the therapist&apos;s office",
    faq: "Commute to the therapist's location, spend time in the waiting room, sit in their office",
  },
  {
    feature: "Messaging any time",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Ability to send messages to your therapist at any time",
    faq: "Send and receive messages to your therapist, no scheduling required!",
  },
  {
    feature: "Chat sessions",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Virtual chat sessions with your therapist",
    faq: "Real-time conversation over instant messaging",
  },
  {
    feature: "Phone sessions",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Therapy sessions conducted via phone",
    faq: "Talk with your therapist over the phone at a scheduled time",
  },
  {
    feature: "Video sessions",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Therapy sessions via video calls",
    faq: "Face-to-face session with your therapist over video at a scheduled time",
  },
  {
    feature: "Easy scheduling",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Easily schedule appointments",
    faq: "Have a full look at your therapist's schedule and pick a time that works for you",
  },
  {
    feature: "Digital worksheets",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Worksheets available online for therapy",
    faq: "150+ digital worksheets and modules that support the therapy process",
  },
  {
    feature: "Group sessions",
    betterHelp: true,
    inOffice: { result: false, nan: true },
    info: "Participate in group therapy sessions",
    faq: "Free access to 20+ weekly live interactive group seminars delivered by expert therapists",
  },
  {
    feature: "Smart provider matching",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Matching you with the best provider",
    faq: "Get matched to a therapist from a pool of over 33,000 providers based on your needs, preferences, and demographics",
  },
  {
    feature: "Easy to switch providers",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Easily switch between different therapists",
    faq: "If you're unhappy with your therapist, click a button and get matched to another provider",
  },
  {
    feature: "Access therapy from anywhere",
    betterHelp: true,
    inOffice: { result: false, nan: false },
    info: "Therapy accessible from any location",
    faq: "Using a phone or computer you can reach out to your therapist anytime, from anywhere",
  },
];

export const faqData = [
  {
    question: "Who are the therapists?",
    answer:
      "Therapists are licensed and trained professionals who specialize in helping individuals manage and overcome mental health challenges. They use various therapeutic methods to assist people in improving their emotional, psychological, and behavioural well-being.",
  },
  {
    question: "Who will be helping me?",
    answer: `At Freudia, you will be helped by qualified and experienced therapists who specialize in various aspects of mental health care. Depending on your needs, you'll be matched with a therapist who is skilled in the areas you're seeking support for, whether it&apos;s managing stress, anxiety, depression, or other emotional challenges.`,
  },
  {
    question: "Is Freudia right for me?",
    answer:
      "Freudia provides affordable, accessible mental health care through qualified therapists via chat, audio, and video sessions. With prices starting at ₹250, it offers flexible support for both urban and rural communities. Freudia prioritizes privacy and integrates AI-driven insights for personalized therapy, making it a great option for anyone seeking expert care. ",
  },
  {
    question: "How much does it cost?",
    answer:
      `"Freudia offers affordable therapy sessions with prices starting at:
      •	₹250 for students and rural clients (including farmers)
      •	Standard rates may vary based on the type of therapy and the therapist's expertise.
"`,
  },
  {
    question: "After I sign up, how long until I'm matched with a therapist?",
    answer: "After signing up with Freudia, you'll be matched with a therapist within 24-48 hours, and can schedule your first session at your convenience. The process is quick and designed to get you the support you need without delay.",
  },
  {
    question: "How will I communicate with my therapist?",
    answer:
      "You can communicate with your therapist through chat, audio, or video sessions, depending on your preference and the therapy format you choose. Freudia offers flexibility, so you can choose the method that makes you feel most comfortable and secure.",
  },
  {
    question: "Can Freudia substitute for traditional face-to-face therapy?",
    answer:
      "Freudia offers a flexible, remote alternative to traditional face-to-face therapy. While it&apos;s effective for most people, it may not be suitable for severe cases that require in-person intervention. For many, Freudia's video, audio, and chat therapy provide high-quality, accessible support.",
  },
  {
    question: "How long can I use Freudia?",
    answer:
      "You can use Freudia as long as you need. There's no set limit on how long you can access therapy sessions or use the platform. Whether you need short-term support or long-term mental health care, Freudia offers continuous access to therapy tailored to your needs.",
  },
  {
    question: "How can I be sure that this is an effective form of therapy?",
    answer:
      "Freudia offers effective therapy through qualified professionals using proven methods like CBT. It provides a personalized, confidential experience with flexible formats (video, audio, chat). The integration of AI and technology enhances the therapy process, making it a reliable option for many. You can try it out to see if it works for you.",
  },
];

export const morefaqs = [
  {
    question: "What is Freudia?",
    answer:
      "Freudia is an online mental health platform offering affordable, accessible therapy through qualified professionals. It provides therapy in video, audio, and chat formats and uses AI-driven insights for personalized support, aiming to make mental wellness care available to everyone, including underserved communities.",
  },
  {
    question: "Who will be helping me?",
    answer:
      "At Freudia, you will be helped by qualified and experienced therapists who specialize in various aspects of mental health care. Depending on your needs, you'll be matched with a therapist who is skilled in the areas you're seeking support for, whether it&apos;s managing stress, anxiety, depression, or other emotional challenges.",
  },
  {
    question: "Who are the therapists?",
    answer:
      "Therapists are licensed and trained professionals who specialize in helping individuals manage and overcome mental health challenges. They use various therapeutic methods to assist people in improving their emotional, psychological, and behavioural well-being.",
  },
  {
    question: "How are the therapists verified?",
    answer:
      "Freudia verifies therapists through a rigorous process that includes checking their licensing, qualifications, experience, and background. Ongoing supervision ensures that all therapists maintain high standards of care.",
  },
  {
    question: "Can I stay anonymous?",
    answer: `Yes, you can stay anonymous while using Freudia. The platform prioritizes your privacy and confidentiality, allowing you to access therapy without sharing personal information if you prefer. You can use Freudia&apos;s services through secure, private sessions in any format (chat, audio, video) while maintaining your anonymity.`,
  },
  {
    question: "How can I be sure that this is an effective form of therapy??",
    answer:
      "Freudia offers effective therapy through qualified professionals using proven methods like CBT. It provides a personalized, confidential experience with flexible formats (video, audio, chat). The integration of AI and technology enhances the therapy process, making it a reliable option for many. You can try it out to see if it works for you.",
  },
  {
    question: "How can I get started with Freudia?",
    answer: "To get started with Freudia, simply sign up, fill out a short questionnaire, and get matched with a therapist within 24-48 hours. Then, schedule your session and start therapy in your preferred format (chat, audio, or video). It&apos;s quick and easy!",
  },
  {
    question: "How can I be sure that this is an effective form of therapy?",
    answer:
      "Freudia offers effective therapy through qualified professionals using proven methods like CBT. It provides a personalized, confidential experience with flexible formats (video, audio, chat). The integration of AI and technology enhances the therapy process, making it a reliable option for many. You can try it out to see if it works for you.",
  },
];

export const onHandleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
