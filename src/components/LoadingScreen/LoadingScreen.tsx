import { Dimmer, Loader } from 'semantic-ui-react';
import React from 'react';

export const LoadingScreen = () => {
  return (
    <div data-testid="loading-user-profile">
      <Dimmer active inverted>
        <Loader />
      </Dimmer>
    </div>
  );
};
