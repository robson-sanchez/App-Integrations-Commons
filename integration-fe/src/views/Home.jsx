import React from 'react';
import IntegrationHeader from '../components/IntegrationHeader/IntegrationHeader';
import TableInstanceContainer from '../containers/TableInstanceContainer';
import SetupInstructions from '../components/SetupInstructions/SetupInstructions';
import ConfigureNew from '../components/ConfigureNew/ConfigureNew';

const Home = () => (
  <div>
    <IntegrationHeader showSubTitle={false} />
    <SetupInstructions />
    <ConfigureNew />
    <TableInstanceContainer />
  </div>
);

export default Home;
