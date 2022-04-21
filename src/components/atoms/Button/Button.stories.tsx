import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentBlockOne from ".";
import {
  ButtonColorEnum,
  ButtonSizeEnum,
  ButtonWeightEnum,
} from "./Button.typescript";

export default {
  title: "Atoms/Button",
  component: ContentBlockOne,
  argTypes: {
    color: {
      options: [ButtonColorEnum.light, ButtonColorEnum.dark],
      control: { type: "radio" },
    },
    size: {
      options: [ButtonSizeEnum.small, ButtonSizeEnum.large],
      control: { type: "radio" },
    },
    weight: {
      options: [ButtonWeightEnum.regular, ButtonWeightEnum.bold],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ContentBlockOne>;

const Template: ComponentStory<typeof ContentBlockOne> = (args) => (
  <ContentBlockOne {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  color: ButtonColorEnum.light,
  link: {
    href: "https://google.com",
    text: "Button"
  },
  size: ButtonSizeEnum.small,
  text: "Button",
  weight: ButtonWeightEnum.regular,
};
