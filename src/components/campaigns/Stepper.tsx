"use client";

const Stepper = ({ step }: { step: number }) => {
  const steps = [1, 2, 3];

  return (
    <div className="relative flex items-center  w-full  mx-auto mb-4">
      {/* Line */}
      <div className="absolute top-1/2 w-full h-[1px] bg-[var(--primary-blue)]"></div>

      {/* Steps */}
      <div className="relative flex justify-between w-full">
        {steps.map((sp, index) => (
          <div
            key={index}
            className={`w-3 h-3 ${
              index < step
                ? "bg-[var(--primary-blue)]"
                : "border border-[var(--primary-blue)]"
            } rounded-full transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
