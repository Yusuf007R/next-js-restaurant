import tw from 'twin.macro';
import {createGlobalStyle} from 'styled-components';

const ThemeStyles = createGlobalStyle`
  .light {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8F8F8;
    --text-primary: #0A0A0A;
    --text-secondary: #909090;
    //this rgb values are needed to be able to parse them into rgba at tailwind.configs.js
    --color-purple: 85, 57, 163;
    --color-orange: 255, 98, 35;
    --color-yellow: 255, 214, 68;
  }
  .dark {
    --bg-primary: #4a435c;
    --bg-secondary: #29223d;
    --text-primary: #ffffff;
    --text-secondary: #aca9a9;
    --color-purple: 85, 57, 163;
    --color-orange: 255, 98, 35;
    --color-yellow: 255, 214, 68;
  }
  body {
    ${tw`bg-primary text-primary`}
    font-family: 'Nunito', sans-serif;
  }
`;

export default ThemeStyles;
