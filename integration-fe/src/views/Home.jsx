import React from 'react';
import TableInstanceContainer from '../containers/TableInstanceContainer';
import IntegrationHeader from '../components/IntegrationHeader/IntegrationHeader';
import ConfigureNew from '../components/ConfigureNew/ConfigureNew';

const Home = () => (
  <div>
    <IntegrationHeader />
    <ConfigureNew />
    <TableInstanceContainer />
  </div>
);

export default Home;
