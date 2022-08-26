// packages/TextView/index.stories.tsx
import React from "react";
import Button from "./index";

export default {
  title: "Button",
  component: Button
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button"
};
