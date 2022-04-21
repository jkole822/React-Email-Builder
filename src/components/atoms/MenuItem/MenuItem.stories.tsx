import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuItem from ".";

export default {
  title: "Atoms/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
);

export const Basic = Template.bind({});
Basic.args = { link: { href: "https://google.com", text: "Visit" } };
