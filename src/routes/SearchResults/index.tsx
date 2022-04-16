import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';

export const SearchResults = () => {
  return (
    <BaseLayout
      header={<Header />}
      main={<div className="container mx-auto">Search Results</div>}
    />
  );
};
