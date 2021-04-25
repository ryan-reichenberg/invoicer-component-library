import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Card } from "../src/components/Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = (args) => (
    <Card {...args}>
        <h1 className='text-lg'>Heading</h1>
        <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo pariatur aperiam nesciunt, magnam non eveniet! Quasi eaque, repudiandae repellat quia iste nihil. Modi tenetur laboriosam quam temporibus nostrum placeat!</p>
    </Card>
);
export const card = Template.bind({});
card.parameters = {
    controls: { hideNoControlsWarning: true },
  };
  
  
// Reuse that template for creating different stories
