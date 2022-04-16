import { App } from './App';

import { Routes, Route } from 'react-router-dom';
import { SearchResults } from './SearchResults';

const NotFound = () => <div>Sorry, nothing here.</div>;

export const RootApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
