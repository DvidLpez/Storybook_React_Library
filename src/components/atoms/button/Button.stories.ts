import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Styled/Button',
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
    severity: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    severity: 'secondary'
  }
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    severity: 'info'
  }
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    severity: 'success'
  }
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    severity: 'warning'
  }
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    severity: 'danger'
  }
};

export const Black: Story = {
  args: {
    label: 'Black Button',
    severity: 'black'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled button',
    disabled: true,
  }
};

export const Small: Story = {
  args: {
    label: 'Small button',
    size: 'small',
  }
};

export const Large: Story = {
  args: {
    label: 'Large button',
    size: 'large',
  }
};

export const Badge: Story = {
  args: {
    label: 'Badge button',
    badge: '2 messages',
  }
};

export const Rounded: Story = {
  args: {
    label: 'Rounded button',
    rounded: true,
  }
};