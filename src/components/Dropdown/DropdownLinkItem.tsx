import React from 'react';
import { DropdownItem } from './DropdownItem';
import { Link } from 'react-router-dom';

export interface DropdownLinkItem extends DropdownItem {
  link: string;
}

interface DropdownLinkItemProps extends DropdownLinkItem {}

export const DropdownLinkItem = (props: DropdownLinkItemProps) => {
  return (
    <li className="p-1.5 px-3 rounded-md font-semibold last:mb-0 text-sm hover:bg-gray-10 last:mb-0 text-sm hover:bg-gray-100 cursor-pointer">
      <Link to={props.link}>{props.label}</Link>
    </li>
  );
};
