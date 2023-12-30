import type { Meta, StoryObj } from '@storybook/react';

import {Spinner} from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Styled/Spinner',
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas.
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    severity: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    severity: 'secondary'
  }
};

export const Info: Story = {
  args: {
    severity: 'info'
  }
};

export const Success: Story = {
  args: {
    severity: 'success'
  }
};

export const Warning: Story = {
  args: {
    severity: 'warning'
  }
};

export const Danger: Story = {
  args: {
    severity: 'danger'
  }
};

export const Black: Story = {
  args: {
    severity: 'black'
  }
};

export const Small: Story = {
  args: {
    size: 'small'
  }
};

export const Big: Story = {
  args: {
    size: 'big'
  }
};

export const WithText: Story = {
  args: {
    text: 'Loading...'
  }
};
