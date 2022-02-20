import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  type: 'primary-action',
  label: 'Primary',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Risk = Template.bind({});
Risk.args = {
  label: 'Risk',
  type: 'risky'
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  type: 'disabled',
  disabled: true
}
