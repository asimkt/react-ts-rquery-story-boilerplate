import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageGrid } from 'components/molecules/ImageGrid';
import { Header } from 'components/organisms/Header';
import { BaseImage } from 'types';

import { BaseLayout } from '.';

const images = [
  {
    description: 'A man drinking a coffee.',
    src: 'https://images.unsplash.com/photo-1517242027094-631f8c218a0f?q=75&fm=jpg&w=1080&fit=max',
  },
  {
    description: 'A man drinking a coffee.',
    src: 'https://images.unsplash.com/photo-1472457974886-0ebcd59440cc?q=75&fm=jpg&w=1080&fit=max',
  },
] as BaseImage[];

const sampleImages = images.reduce(
  (acc, img) => [...acc, img, img, img, img],
  [] as BaseImage[],
);
export default {
  title: 'Templates/BaseLayout',
  component: BaseLayout,
} as ComponentMeta<typeof BaseLayout>;

const Template: ComponentStory<typeof BaseLayout> = args => (
  <BaseLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  header: 'Header',
  main: 'Main',
};

export const WithComponents = Template.bind({});
WithComponents.args = {
  header: <Header />,
  main: <ImageGrid images={sampleImages} />,
};
