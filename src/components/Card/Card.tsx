import React, { Component } from 'react';

interface Props {}

export class Card extends Component<Props> {
  render() {
    return (
      <div
        className={
          'shadow-md rounded-md bg-white border border-gray-200 w-full h-full -my-2 overflow-x-auto'
        }
      >
        <div className={'shadow rounded-md w-full h-full p-5'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
