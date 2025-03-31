import React from "react";

const PillComponent = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick?: () => void;
}) => {
  return (
    <div
      onClick={handleClick}
      className="w-2/4 border bg-sidebar_background text-white p-1 mt-1 rounded-full text-center cursor-pointer hover:bg-sidebar_background/20 hover:text-sidebar_background capitalize"
    >
      {text}
    </div>
  );
};

export default PillComponent;
