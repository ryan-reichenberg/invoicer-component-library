import React from 'react';

export interface DropdownItem {
  label: string;
  onClick?: () => void;
}
interface DropdownItemProps extends DropdownItem {}

export const DropdownItem = (props: DropdownItemProps) => {
  return (
    <li
      className="p-1.5 px-3 rounded-md last:mb-0 text-sm hover:bg-gray-100 cursor-pointer"
      onClick={props.onClick}
    >
      {props.label}
    </li>
  );
};
