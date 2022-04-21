import { ComponentStory, ComponentMeta } from "@storybook/react";
import ContentBlockThree from ".";

export default {
  title: "Organisms/ContentBlockThree",
  component: ContentBlockThree,
} as ComponentMeta<typeof ContentBlockThree>;

const Template: ComponentStory<typeof ContentBlockThree> = (args) => (
  <ContentBlockThree {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
