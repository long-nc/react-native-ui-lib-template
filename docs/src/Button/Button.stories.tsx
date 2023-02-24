import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { MyButton } from "../../../core/src/Button/Button";

export default {
  title: "components/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

Basic.args = {
  text: "Hello World",
  color: "purple",
};
