import type { Meta, StoryObj } from '@storybook/react';

import Infoapp from '.';

const meta: Meta<typeof Infoapp> = {
  component: Infoapp,
};

export default meta;
type Story = StoryObj<typeof Infoapp>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    type: 'info',
  },
};
