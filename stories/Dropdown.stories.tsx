import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Dropdown, DropdownProps } from "../src/components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Reuse that template for creating different stories
export const Info = Template.bind({});
Info.args = { label: 'Dropdown' };
