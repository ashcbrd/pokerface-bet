import React, { FunctionComponent } from "react";

interface CustomNavigationProps {
  onClick: () => void;
  direction: "prev" | "next";
}

const CustomNavigation: FunctionComponent<CustomNavigationProps> = ({
  onClick,
  direction,
}) => {
  return (
    <button
      onClick={onClick}
      className={`custom-navigation custom-${direction}-button w-14 h-14 overflow-hidden flex items-center justify-center`}
    >
      {direction === "prev" ? (
        <img src="right-arrow.png" className="w-6 rotate-180 -translate-x-5" />
      ) : (
        <img src="right-arrow.png" className="w-6 translate-x-5" />
      )}
    </button>
  );
};

export default CustomNavigation;
