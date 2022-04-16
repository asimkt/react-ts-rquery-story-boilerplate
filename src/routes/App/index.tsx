import { Header } from 'components/organisms/Header';
import { BaseLayout } from 'components/templates/BaseLayout';

export const App = () => {
  return (
    <BaseLayout
      header={<Header />}
      main={<div className="container mx-auto">App Component</div>}
    ></BaseLayout>
  );
};
