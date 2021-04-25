import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Pill, PillProps } from "../src/components/Pill";

export default {
  title: "Components/Pill",
  component: Pill,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<PillProps> = (args) => <Pill {...args} />;

// Reuse that template for creating different stories
export const Info = Template.bind({});
Info.args = { text: "Info", type: "info" };
