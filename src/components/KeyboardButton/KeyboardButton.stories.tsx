import React from "react";
import KeyboardButton, { KeyboardButtonProps } from "./KeyboardButton";
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  component: KeyboardButton,
  title: "KeyboardButton",
} as Meta;

const Template: Story<KeyboardButtonProps>  = (args) => <KeyboardButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  label: "return",
};
