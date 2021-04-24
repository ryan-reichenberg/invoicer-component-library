import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Table, TableProps } from "../src/components/Table";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TableProps> = (args) => <Table {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { columns: [{name: 'hello'}, {name: 'hello2'}], data: [
  {hello:'world', hello2: 'world2'}, 
  {hello: 'world3', hello2:'world4'}
]};