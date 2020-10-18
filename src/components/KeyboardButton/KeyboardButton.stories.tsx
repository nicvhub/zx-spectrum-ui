import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import KeyboardButton, { KeyboardButtonProps } from "./KeyboardButton";

export default {
  component: KeyboardButton,
  title: "KeyboardButton",
} as Meta;

const Template: Story<KeyboardButtonProps> = (args) => (
  <KeyboardButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "return",
};
