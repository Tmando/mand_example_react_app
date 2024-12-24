import type { Meta, StoryObj } from '@storybook/react';
import  {CustomBootstrapButton}  from '../components/helpers/CustomBootstrapButton';

const meta = {
  title: 'Components/helpers/CustomBootstrapButton',
  component: CustomBootstrapButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {

  }
} satisfies Meta<typeof CustomBootstrapButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const CustomBootstrapButtonStoryOne: Story = {
    args: {

    },  
    parameters:{
      layout:"centered"
    }
  };


  export const CustomBootstrapButtonDisabled: Story = {
    args: {
      label:"Button Two",
      id:"btn_two",
      disabled:true
    },  
    parameters:{
      layout:"centered"
    }
  };