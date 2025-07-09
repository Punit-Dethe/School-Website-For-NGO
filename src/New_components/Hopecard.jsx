import React from "react";

export default function HopeCard() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-sky-400 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 text-white">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold font-cursive mb-4">
          You are the{" "}
          <span className="italic underline font-bold">hope of others.</span>
        </h2>
        <p className="text-sm leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s.
        </p>
      </div>
      <div className="flex-1">
        <div className="bg-white rounded-2xl shadow-md h-40 md:h-full w-full"></div>
      </div>
    </div>
  );
}