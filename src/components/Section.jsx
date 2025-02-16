import React from "react";

const Section = ({ title, children }) => (
    <div className="space-y-2">
        <p className="text-[1.9rem] font-semibold text-teal-600">{title}</p>
        <p className="text-[1.6rem]">{children}</p>
        <hr className="my-4" />
    </div>
);

export default Section;