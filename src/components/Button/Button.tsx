import React from 'react';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /**
   * Button contents
   */
  label: string;
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = 'medium',
  disabled = false,
  onClick,
  label,
}: ButtonProps) => {
  const mode = primary
    ? 'text-green-800 bg-green-100 border border-transparent active:bg-green-300 hover:bg-green-200 focus:shadow-outline-purple'
    : 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray';
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed' + (primary ? '' : ' bg-gray-300')
    : '';
  let sizeClasses = 'px-4 py-2 rounded-md text-sm';
  switch (size) {
    case 'small':
      sizeClasses = 'px-3 py-1 rounded-md text-sm';
      break;
    case 'large':
      sizeClasses = 'px-5 py-3 rounded-lg';
      break;
    case 'xlarge':
      sizeClasses = 'px-10 py-4 rounded-lg';
      break;
  }
  return (
    <button
      type="button"
      className={
        'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none ' +
        mode +
        ' ' +
        disabledClasses +
        ' ' +
        sizeClasses
      }
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
