import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentBlockFive from ".";

export default {
  title: "Organisms/ContentBlockFive",
  component: ContentBlockFive,
} as ComponentMeta<typeof ContentBlockFive>;

const Template: ComponentStory<typeof ContentBlockFive> = (args) => (
  <ContentBlockFive {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
