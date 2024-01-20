"use client";

export default function Welcome() {
  return (
    <section className="welcome bg-[#0C172D] min-h-screen text-center flex flex-col justify-center">
      <div className="container">
        <div className="text-5xl md:text-8xl font-medium text-white">
          Welcome to the
        </div>
        <div className="text-5xl md:text-8xl font-medium text-primary-red">
          HPB Simulation
        </div>
        <div className="text-5xl md:text-8xl font-light text-white">
          Experience
        </div>
      </div>
    </section>
  );
}
