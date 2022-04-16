import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
            <Link to="/"> Header</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
