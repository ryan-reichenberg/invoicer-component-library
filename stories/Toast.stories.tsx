import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Toast, ToastProps } from "../src/components/Toast";

export default {
  title: "Components/Toast",
  component: Toast,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ToastProps> = (args) => <Toast {...args} />

// Reuse that template for creating different stories
export const Info = Template.bind({});
Info.args = { text: "There is a new software (v2.0.3) update available! ", type: "info", header: 'Heads Up!', shown: true };
