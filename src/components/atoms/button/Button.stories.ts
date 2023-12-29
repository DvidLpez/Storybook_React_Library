import type { Meta, StoryObj } from '@storybook/react'
import  { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Primary button',
    disabled: false
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};