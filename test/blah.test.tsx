import React from 'react';
import { render, cleanup } from 'react-testing-library';
// import 'jest-dom/extend-expect';
import { Main } from '../src/index';

afterEach(cleanup);

test('loads and displays greeting', async () => {
  const { debug } = render(<Main />);

  debug();
});
