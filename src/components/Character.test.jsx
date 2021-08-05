import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component snapshot', () => {
  it('render character', () => {
    const { asFragment } = render(
      <Character />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
