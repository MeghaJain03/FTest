import React from "react";
import { Link } from "react-router-dom";

const RequestDemo = ({ source }) => {
  return (
    <>
      <Link
        // to={"/requestdemo"}
        to={`/requestdemo?source=${source}`}
        className='bg-sky-500 text-blue-950 px-4 py-2 rounded-full hover:bg-blue-700 hover:text-white'
      >
        Request a demo
      </Link>
    </>
  );
};

export default RequestDemo;
