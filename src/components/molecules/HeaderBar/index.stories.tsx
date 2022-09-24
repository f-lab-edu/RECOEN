import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderBar } from './index';

export default {
  title: 'Molecules/HeaderBar',
  component: HeaderBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof HeaderBar>;

const Template: ComponentStory<typeof HeaderBar> = () => <HeaderBar />;

export const Primary = Template.bind({});

Primary.args = {};
