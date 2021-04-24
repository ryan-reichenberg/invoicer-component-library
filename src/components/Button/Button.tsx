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
    ? "bg-green-100 text-green-800"
    : "bg-white ring-1 ring-gray-400 text-gray-600";
  return (
    <button
      type="button"
      className={["p-3","px-4", "rounded-lg","font-semibold", "text-sm", mode].join(
        " "
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};