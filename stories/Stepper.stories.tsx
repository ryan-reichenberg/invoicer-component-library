import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Stepper, StepperProps } from "../src/components/Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { activeStep: 1, maxSteps: 5};