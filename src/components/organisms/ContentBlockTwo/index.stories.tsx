import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContentBlockTwo } from ".";

export default {
  title: "Organisms/ContentBlockTwo",
  component: ContentBlockTwo,
} as ComponentMeta<typeof ContentBlockTwo>;

const Template: ComponentStory<typeof ContentBlockTwo> = args => (
  <ContentBlockTwo {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
