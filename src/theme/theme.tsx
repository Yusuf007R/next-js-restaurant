import tw from 'twin.macro';
import {createGlobalStyle} from 'styled-components';

const ThemeStyles = createGlobalStyle`
  .light {
    --bg-primary: #FFFFFF;
    --bg-secondary: #FDFDFB;
    --text-primary: #0A0A0A;
    --text-secondary: #BFBFBF;
    --color-purple: #5539A3;
    --color-orange:#FF6223;
    --color-yellow:#FFD644;
  }
  .dark {
    --bg-primary: #817e7e;
    --bg-secondary: #FDFDFB;
    --text-primary: #0A0A0A;
    --text-secondary: #BFBFBF;
    --color-purple: #5539A3;
    --color-orange:#FF6223;
    --color-yellow:#FFD644;
  }
  body {
    ${tw`bg-primary text-primary`}
  }
`;

export default ThemeStyles;
