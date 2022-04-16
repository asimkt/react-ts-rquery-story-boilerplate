import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '.';

export default {
  title: 'Atoms/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/600x400',
  title: 'Image',
};
