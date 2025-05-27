import React from "react";

// w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600

const BaseRadioButton = ({
  handleClicked,
}: {
  handleClicked: (e: any) => void;
}) => {
  return (
    <div className="p-3.5">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        onClick={(e) => console.log("----",e.target)}
        name="default-radio"
        className="w-16 h-16 text-primary bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3 disabled:bg-border_light"
      />

      {/* <button
        type="radio"
        onClick={handleSubmit}
        className="w-full h-16 text-white bg-primary hover:bg-primaryDark focus:outline-none  font-medium rounded-md text-md text-center py-3 disabled:bg-border_light"
        disabled={loading}
      >
        
      </button> */}
    </div>
  );
};

export default BaseRadioButton;
