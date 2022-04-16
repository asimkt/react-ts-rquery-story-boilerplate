import { Image } from 'components/atoms/Image';
import { BaseImage } from 'types';

interface Props {
  images: BaseImage[];
  onImgClick?: (img: BaseImage) => void;
}

export const ImageGrid = ({ images }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map(img => {
            return (
              <div key={img.id}>
                <Image
                  src={img.src}
                  title={img.description}
                  color={img.color}
                  extraClassNames="aspect-[4/3]"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
