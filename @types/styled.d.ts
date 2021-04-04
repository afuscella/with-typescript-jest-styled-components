import 'styled-components';
import { ColorsType } from '../src/types/colorsType.ts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType,
    transition: string;
    fontFamily: string;
  }
}
