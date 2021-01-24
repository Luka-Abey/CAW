import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RouteConstants from './RouteConstants';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Submission from '../pages/Submission/Submission';
import Feedback from '../pages/Submission/Submission';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path={RouteConstants.Home} component={Home} />
        <Route exact path={RouteConstants.Submission} component={Submission} />
        <Route exact path={RouteConstants.Feedback} component={Feedback} />
        {/* Layout is constant where as Route changes.  */}
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
