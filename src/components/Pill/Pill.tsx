import React, { FC } from 'react';

export interface PillProps {
  text: string;
  type: 'info' | 'success' | 'danger' | 'warn';
  size: 'small' | 'medium' | 'large';
}
export const Pill: FC<PillProps> = (props) => {
  let mode = '';
  switch (props.type) {
    case 'info':
      mode = 'blue';
      break;
    case 'success':
      mode = 'green';
      break;
    case 'danger':
      mode = 'red';
      break;
    case 'warn':
      mode = 'yellow';
      break;
    default:
      mode = 'blue';
  }
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-${mode}-100 text-${mode}-800`}
    >
      {props.text}
    </span>
  );
};
