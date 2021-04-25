import React from "react";

export interface ButtonProps  {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
//   size = "medium",
  onClick,
  label,
}: ButtonProps) => {
  const mode = primary
    ? "text-green-800 bg-green-100 border border-transparent active:bg-green-300 hover:bg-green-200 focus:shadow-outline-purple"
    : "text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray";
  return (
    <button
      type="button"
      className={'px-4 py-2 rounded-lg text-sm align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none '+mode}
      onClick={onClick}
    >
      {label}
    </button>
  );
};