// Button.stories.ts

import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: ButtonComponent,
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
    clickedButton: action('onClick'),
  },
});

export const Button = Template.bind({});
Button.args = {
  text: 'Primary',
  type: 'button',
  color: 'primary',
};
