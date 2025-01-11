import type { Meta, StoryObj } from '@storybook/react';
import { VerticalTable } from '../components/helpers/VerticalTable';

const meta = {
  title: 'Components/VerticalTable',
  component: VerticalTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {

  }
} satisfies Meta<typeof VerticalTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalTableStoryOne: Story = {
  parameters:{
    layout:"centered"
  },
  args:{
    TableArray : {
        "Test 1" : "Test 1",
        "Test 2" : "Test 2",
        "Test 3" : "Test 3",
    },
    table_class:"table-hover",
    data_property_class:"col_label",
    data_entry_class:"col_result"
  }
};