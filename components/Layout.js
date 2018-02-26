import React from 'react';

import Head from 'next/head';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import HeaderPanel from './HeaderPanel';
// import '~/styles/index.sass'

// import applyStyles from '~/components/applyStyles';
// import '~/styles/index.sass';

const isProduction = process.env.NODE_ENV === 'production';

const Layout = ({ children, title = 'Site', page = '' }) => (

  <React.Fragment>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet" />
    </Head>
    <div className="page js-wrap" id="main">
      <PageHeader />
      <HeaderPanel />
      { children }
      <PageFooter />
    </div>
  </React.Fragment>
);


export default Layout;

