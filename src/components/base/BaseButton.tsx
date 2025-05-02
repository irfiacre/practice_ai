import React from "react";
import { ClipLoader, ScaleLoader, PulseLoader } from "react-spinners";

const BaseButton = ({
  children,
  handleClick,
  loading,
  className,
}: {
  children: any;
  handleClick?: (e: any) => void;
  loading?: boolean;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-10 text-white bg-primary hover:bg-primary_light focus:outline-none font-normal rounded-md text-md text-center py-3 disabled:bg-border_light ${className}`}
      disabled={loading}
    >
      {loading ? (
        <PulseLoader
          color={"#ffffff"}
          loading={loading}
          size={10}
          cssOverride={{ width: "100%" }}
          aria-label="Loading Spinner"
          data-testid="loader"
          speedMultiplier={0.5}
        />
      ) : (
        children
      )}
    </button>
  );
};

export default BaseButton;
