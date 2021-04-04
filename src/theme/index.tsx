import { DefaultTheme } from 'styled-components';

import { ColorsType } from '../types/colorsType';

const colors: ColorsType = {
  background: {
    light: {
      color: '#fafbfc',
    },
    main: {
      color: '#fff',
    },
  },
};

export const theme: DefaultTheme = {
  colors,
  transition: '200ms ease-in-out',
  fontFamily: 'Arial,Helvetica,sans-serif',
};
