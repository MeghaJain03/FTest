import Working from "./Working";

const HowItWorks = () => {
  // useEffect(() => {
  //   const animation = gsap.from(".mydiv .stepsDiv", {
  //     y: 100,
  //     opacity: 0.5,
  //     duration: 0.6,
  //     stagger: 0.3,
  //     scrollTrigger: {
  //       trigger: ".scroller",
  //       scroller: "body",
  //       start: "top 60%",
  //       scrub: 2,
  //     },
  //   });

  //   return () => {
  //     animation.kill();
  //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  //   };
  // }, []);

  return (
    <>
      <Working />
    </>
  );
};

export default HowItWorks;