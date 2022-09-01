// packages/Button/index.stories.tsx
import React from "react";
import Button from "./index";
// import {
//   Title,
//   Subtitle,
//   Description,
//   ArgsTable,
//   Stories,
//   PRIMARY_STORY
// } from "@storybook/addon-docs";

import { CustomDocumentationComponent } from "./doc";

export default {
  title: "Button", // 组件显示名称
  subTitle: "12",
  component: Button, // 基础组件实例
  subcomponents: {}, // 子组件实例
  parameters: {
    docs: {
      inlineStories: false, // 是否内联显示
      page: CustomDocumentationComponent // 具体组件文档
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <ArgsTable story={PRIMARY_STORY} />
      //     <Stories />
      //   </>
      // )
    }
  }
};

const Template = args => <Button {...args} />;

// 具体实例
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button"
};
