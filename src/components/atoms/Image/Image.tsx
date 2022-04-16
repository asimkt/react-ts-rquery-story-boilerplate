import { TImage } from 'types';
interface Props extends TImage {
  extraClassNames?: string;
  color?: string;
}

export const Image = ({ src, title, extraClassNames, color }: Props) => {
  return (
    <div className="group cursor-pointer relative">
      <div
        className={`w-full bg-gray-200 rounded-lg overflow-hidden ${extraClassNames}`}
        style={{
          backgroundColor: color,
        }}
      >
        <img
          src={src}
          alt={title}
          className="z-1 w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
    </div>
  );
};
