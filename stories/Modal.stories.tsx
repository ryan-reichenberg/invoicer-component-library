import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Modal, ModalProps } from "../src/components/Modal";
import { Button } from "../src/components/Button";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <div className='mb-6 text-sm text-gray-700'>
      <h1 className='text-xl font-bold'>Heading</h1>
      <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident neque officia nostrum voluptatem hic officiis deleniti reiciendis quam, quos doloribus fuga tempora laboriosam, doloremque dolores, et atque quo distinctio veritatis.</p>
    </div>
    <div className='flex flex-col items-center justify-end px-6 py-3 -mx-6 -mb-4 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row bg-gray-50'>
          <Button primary={false} label='Close' />
          <Button label='Accept' />
    </div>
  </Modal>
);

// Reuse that template for creating different stories
export const modal = Template.bind({});
modal.args = { isOpen: true};
