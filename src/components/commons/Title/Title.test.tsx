import React from 'react';
import { render } from '../../../infra/tests/test-utils';

import { Title } from './index';

describe('<Title />', () => {
  test('render component', () => {
    const { container } = render(
      <Title>
        Test
      </Title>,
    );

    expect(container).not.toBeNull();
    expect(container).toMatchSnapshot();
  });
});
