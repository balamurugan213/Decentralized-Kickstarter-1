import React from 'react';
import Head from 'next/head';
import Header from './Header';
import { Container } from 'semantic-ui-react';

export default props => (
  <Container>
    <Head>
      <link
        rel='stylesheet'
        href='//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css'
      />
    </Head>
    <Header></Header>
    {props.children}
  </Container>
);
