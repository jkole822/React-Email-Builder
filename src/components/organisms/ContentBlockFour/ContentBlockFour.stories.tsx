import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentBlockFour from ".";

export default {
  title: "Organisms/ContentBlockFour",
  component: ContentBlockFour,
} as ComponentMeta<typeof ContentBlockFour>;

const Template: ComponentStory<typeof ContentBlockFour> = (args) => (
  <ContentBlockFour {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
