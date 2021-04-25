import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Alert, AlertProps } from "../src/components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<AlertProps> = (args) => <Alert {...args} />;

// Reuse that template for creating different stories
export const Info = Template.bind({});
Info.args = { text: "There is a new software (v2.0.3) update available! ", type: "info", header: 'Heads Up!' };
