import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import KeyboardButton, { KeyboardButtonProps } from "./KeyboardButton";
import { BLACK } from "../../constants/colors";

export default {
  component: KeyboardButton,
  title: "KeyboardButton",
  decorators: [
    (story) => (
      <div style={{ padding: "3rem", backgroundColor: BLACK }}>{story()}</div>
    ),
  ],
} as Meta;

const Template: Story<KeyboardButtonProps> = (args) => (
  <KeyboardButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "label",
};

export const LongerAltText = Template.bind({});
LongerAltText.args = {
  label: "go",
};

export const TruncatedLabel = Template.bind({});
TruncatedLabel.args = {
  label: "truncated",
};
