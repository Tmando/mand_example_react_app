import type { Meta, StoryObj } from '@storybook/react';
import { RandomNumberComponent } from '../components/RandomNumberComponent';

const meta = {
  title: 'Components/RandomNumberComponent',
  component: RandomNumberComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {

  }
} satisfies Meta<typeof RandomNumberComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TestComponentInputOne: Story = {
  parameters:{
    layout:"centered"
  }
};