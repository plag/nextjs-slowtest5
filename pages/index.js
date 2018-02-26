import React, { Component } from 'react';

import Layout from '../components/Layout';
import Counter from '../components/Counter';

import { withReduxSaga } from '../redux/store';

class ConfirmationPage extends Component {
  render() {
    return (
      <Layout page="confirmation">
        <div className="screen">
          <div className="screen-content">
            Test page
            <Counter />
          </div>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(ConfirmationPage);
