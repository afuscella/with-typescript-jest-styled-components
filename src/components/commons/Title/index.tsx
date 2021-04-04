import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { TitleWrapper } from './styles';

interface ITitle {
  children: ReactNode | ReactNode[];
}

export function Title({ children }: ITitle) {
  return (
    <TitleWrapper>
      {children}
    </TitleWrapper>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
