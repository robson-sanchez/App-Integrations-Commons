import React from 'react';
import IntegrationHeader from '../components/IntegrationHeader/IntegrationHeader';
import InputDescriptionContainer from '../containers/InputDescriptionContainer';
import PostingLocationContainer from '../containers/PostingLocationContainer';
import SubmitInstanceContainer from '../containers/SubmitInstanceContainer';

const EditView = () => (
  <div>
    <IntegrationHeader />
    <InputDescriptionContainer />
    <PostingLocationContainer />
    <SubmitInstanceContainer />
  </div>
);

export default EditView;

