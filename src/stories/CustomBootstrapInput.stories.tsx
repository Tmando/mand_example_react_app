import type { Meta, StoryObj } from '@storybook/react';
import { CustomBootstrapInput } from '../components/helpers/CustomBootstrapInput';

const meta = {
  title: 'Components/helpers/CustomBootstrapInput',
  component: CustomBootstrapInput,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {

  }
} satisfies Meta<typeof CustomBootstrapInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBootstrapInputOne: Story = {
  args: {
    floating_container_class:"custom_form_floating",
    type:"number",
    placeholder:"Test number",
    input_id:"Number One",
    label:"Number One",
    value:40
  },  
  parameters:{
    layout:"centered"
  }
};

export const CustomBootstrapTextInput: Story = {
    args: {
      floating_container_class:"custom_form_floating",
      type:"text",
      placeholder:"Test number",
      input_id:"Text One",
      label:"Text One",
      value:"Test Text"
    },  
    parameters:{
      layout:"centered"
    }
  };

  export const CustomBootstrapTextInputWithoutValue: Story = {
    args: {
      floating_container_class:"custom_form_floating",
      type:"text",
      placeholder:"Input Without Value",
      input_id:"Text Two",
      label:"Input Without Value"
    },  
    parameters:{
      layout:"centered"
    }
  };


  export const CustomBootstrapReadOnly: Story = {
    args: {
      floating_container_class:"custom_form_floating",
      type:"text",
      placeholder:"Input Without Value",
      input_id:"Text Two",
      label:"Input Without Value",
      readOnly:true
    },  
    parameters:{
      layout:"centered"
    }
  };