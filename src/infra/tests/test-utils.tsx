/* eslint-disable react/jsx-props-no-spreading */

// same code than https://testing-library.com/docs/react-testing-library/setup
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

const AllTheProviders: FC = ({ children, ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    {children}
  </ThemeProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  const Provider = (props: any) => <AllTheProviders {...props} {...options} />;
  return render(ui, { wrapper: Provider, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
