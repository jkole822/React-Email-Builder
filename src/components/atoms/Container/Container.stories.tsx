import { ComponentStory, ComponentMeta } from "@storybook/react";
import Container from ".";
import MenuItem from "../MenuItem";

export default {
  title: "Atoms/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <MenuItem link={{ href: "https://google.com", text: "Visit" }} />
    <MenuItem link={{ href: "https://google.com", text: "Service" }} />
  </Container>
);

export const Basic = Template.bind({});
Basic.args = {};
