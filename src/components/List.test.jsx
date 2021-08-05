import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import List from './List';
import { BrowserRouter as Router } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters/:count',
    (req, res, ctx) => {
      return res(
        ctx.json(
          [...Array(+req.params.count)].map((_, i) => ({
            _id: 'dssds',
            name: `name number ${i}`,
            image:'asasa'
          }))
        )
      );
    }
  )
);

describe('List container', () => {

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of character names', async () => {
    render(
      <Router>
        <List />
      </Router>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement;
  });

});
