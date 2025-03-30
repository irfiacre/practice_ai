import React from "react";

const BaseCard = ({
  children,
  className,
}: {
  children: any;
  className?: string; // For tailwind additional styles
}) => {
  return (
    <div
      className={`w-full bg-white border border-background_color2 rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
