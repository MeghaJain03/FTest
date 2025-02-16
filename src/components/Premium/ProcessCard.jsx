import { assets } from "../../assets/assets";

const ProcessCard = ({ steps }) => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-[89.6rem] bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={assets.process}
        alt="Our Process"
        className="flex-1 w-[28.8rem] object-cover border-r border-gray-300"
      />
      <div className="flex-2 p-8 text-center flex flex-col gap-[2.4rem] bg-gray-100 hover:bg-gradient-to-r from-cyan-200 via-gray-100 to-yellow-100 transition duration-300 ease-in-out">
        <h2 className="text-[2.4rem] font-extrabold text-teal-700">Our Process</h2>
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="bg-white border-2 border-teal-700 rounded-full px-[2.4rem] py-[1.2rem] text-[1.4rem] text-teal-700 font-extrabold shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="mt-2 text-teal-700 text-[2.4rem] animate-bounce">
                &#8595;
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCard;