import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
