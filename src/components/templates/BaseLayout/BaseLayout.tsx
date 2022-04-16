import { Link } from 'react-router-dom';

interface Props {
  header: React.ReactNode;
  main: React.ReactNode;
}
export const BaseLayout = ({ header, main }: Props) => {
  return (
    <div className="min-h-screen flex justify-between flex-col">
      {header}
      <div className="flex-grow">
        <main className="my-8">{main}</main>
      </div>
      <footer className="bg-gray-200 ">
        <div className="container mx-auto px-6 py-3 flex justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-gray-500 hover:text-gray-400"
          >
            {' '}
            Splashit
          </Link>
          <p className="py-2 text-gray-500 sm:py-0">All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};
