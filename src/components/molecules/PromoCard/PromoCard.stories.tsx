import { ComponentStory, ComponentMeta } from "@storybook/react";
import PromoCard from ".";

export default {
  title: "Molecules/PromoCard",
  component: PromoCard,
} as ComponentMeta<typeof PromoCard>;

const Template: ComponentStory<typeof PromoCard> = (args) => (
  <PromoCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  imageUrl: "https://cdn.templates.unlayer.com/assets/1606934810497-02.png",
  link: { href: "https://google.com", text: "Buy Now" },
};
