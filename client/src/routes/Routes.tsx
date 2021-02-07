import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RouteConstants from './RouteConstants';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import FormSubmission from '../pages/FormSubmission/FormSubmission';
import Feedback from '../pages/Submissions/Submissions';
import SingleSubmission from '../pages/SingleSubmission/SingleSubmission';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path={RouteConstants.Home} component={Home} />
        <Route exact path={RouteConstants.Submission} component={FormSubmission} />
        <Route exact path={RouteConstants.Feedback} component={Feedback} />
        <Route exact path={RouteConstants.SingleSubmission} component={SingleSubmission} />
        {/* Layout is constant where as Route changes.  */} 
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
