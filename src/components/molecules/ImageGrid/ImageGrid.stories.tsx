import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseImage } from 'types';

import { ImageGrid } from './ImageGrid';

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
  title: 'Molecules/ImageGrid',
  component: ImageGrid,
} as ComponentMeta<typeof ImageGrid>;

const Template: ComponentStory<typeof ImageGrid> = args => (
  <ImageGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  images: sampleImages,
};
