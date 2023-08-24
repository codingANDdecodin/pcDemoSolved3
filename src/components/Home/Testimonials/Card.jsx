import React from "react";

const Card = ({ children, className }) => {
  return (
    <>
      <div className={`${className} shadow-md p-4`}>{children}</div>
    </>
  );
};

export default Card;