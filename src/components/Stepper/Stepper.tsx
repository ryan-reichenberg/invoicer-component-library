import React, { Component } from 'react';
import './stepper.css';

export interface StepperProps {
  activeStep: number;
  maxSteps: number;
}
export class Stepper extends Component<StepperProps> {
  render() {
    const steps = [];
    for (let i = 0; i < this.props.maxSteps; i++) {
      steps.push(
        <div key={`step${i}`}>
          <div className="mx-1">
            {i + 1 === this.props.activeStep ? (
              <div className="active bullet rounded-full flex justify-center items-center">
                <div className="bg-green-500 w-2.5 h-2.5 rounded-full"></div>
              </div>
            ) : (
              <div
                className={
                  (i < this.props.activeStep ? 'bg-green-500' : 'bg-gray-200') +
                  ' w-2.5 h-2.5 rounded-full flex justify-center items-center'
                }
              ></div>
            )}
          </div>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-items-center">
        <span className="font-bold mr-4 text-sm">
          Step {this.props.activeStep} of {this.props.maxSteps}
        </span>
        {steps}
      </div>
    );
  }
}
