import React from "react";

interface CustomButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  text,
  className,
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
