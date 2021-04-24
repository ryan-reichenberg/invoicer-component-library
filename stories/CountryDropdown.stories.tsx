import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { CountryDropdown, CountryDropdownProps } from "../src/components/CountryDropdown";

export default {
  title: "Components/CountryDropdown",
  component: CountryDropdown,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CountryDropdownProps> = (args) => <CountryDropdown {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { selected: "AU"};