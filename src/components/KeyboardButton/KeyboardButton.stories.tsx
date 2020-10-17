import React from "react";
import KeyboardButton from "./KeyboardButton";

export default {
  component: KeyboardButton,
  title: "KeyboardButton",
};

const Template = (args) => <KeyboardButton {...args}/>;

export const Default = Template.bind({});
Default.args = {
  label: "return",
};
