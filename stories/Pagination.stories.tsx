import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Pagination, PaginationProps } from "../src/components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

// Reuse that template for creating different stories
export const Info = Template.bind({});
Info.args = { page: 1, pageSize: 9, totalResults: 32 };
