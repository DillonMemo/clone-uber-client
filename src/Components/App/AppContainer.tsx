import React from 'react';
import { graphql } from 'react-apollo';
import { Global } from '@emotion/core';

import AppPresenter from './AppPresenter';
import { IS_LOGGED_IN } from './AppQueries';
import { theme } from '../../theme';

const AppContainer = ({ data }: { data?: any }) => {
  console.log('data :', data);
  return (
    <>
      <Global styles={[theme]} />
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </>
  );
};

export default graphql(IS_LOGGED_IN)(AppContainer);
