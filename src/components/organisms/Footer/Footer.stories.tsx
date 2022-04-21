import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from ".";

export default {
  title: "Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
