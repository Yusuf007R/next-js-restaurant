import tw from 'twin.macro';
import {createGlobalStyle} from 'styled-components';

const ThemeStyles = createGlobalStyle`
  .light {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F8F8;
    --text-primary: #0A0A0A;
    --text-secondary: #BFBFBF;
    //this rgb values are needed to be able to parse them into rgba at tailwind.configs.js
    --color-purple: 85, 57, 163;
    --color-orange: 255, 98, 35;
    --color-yellow: 255, 214, 68;
  }
  .dark {
    --bg-primary: #817e7e;
    --bg-secondary: #FDFDFB;
    --text-primary: #0A0A0A;
    --text-secondary: #BFBFBF;
    --color-purple: 85, 57, 163;
    --color-orange: 255, 98, 35;
    --color-yellow: 255, 214, 68;
  }
  body {
    ${tw`bg-primary text-primary`}
  }
`;

export default ThemeStyles;
