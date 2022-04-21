import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentBlockOne from ".";

export default {
  title: "Organisms/ContentBlockOne",
  component: ContentBlockOne,
} as ComponentMeta<typeof ContentBlockOne>;

const Template: ComponentStory<typeof ContentBlockOne> = (args) => (
  <ContentBlockOne {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
