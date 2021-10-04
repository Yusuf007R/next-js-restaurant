import React, {useState} from 'react';
import {
  Container,
  LoginButton,
  LoginWithContainer,
  SocialContainer,
  UserText,
} from './style';

import FacebookIcon from '../../../public/assets/icons/facebook-icon.svg';
import TwitterIcon from '../../../public/assets/icons/twitter-icon.svg';
import GoogleIcon from '../../../public/assets/icons/google-icon.svg';
import useFirebaseAuth, {loginType} from 'src/hooks/use-firebase-auth';

export default function LoginCard() {
  const [isVisible, setIsVisible] = useState(false);
  const {SignIn, user} = useFirebaseAuth();
  const toggleIsVisible = () => {
    setIsVisible(prev => !prev);
  };

  const handleClick = (type: loginType) => {
    SignIn(type);
  };

  return (
    <Container>
      {user ? (
        <UserText>
          Hola, {user?.displayName?.slice(0, user?.displayName.indexOf(' '))}!
        </UserText>
      ) : (
        <LoginButton onClick={toggleIsVisible}>Login</LoginButton>
      )}
      {isVisible && user === undefined && (
        <LoginWithContainer>
          <SocialContainer onClick={() => handleClick('google')}>
            <GoogleIcon height="100%" width="100%"></GoogleIcon>
          </SocialContainer>
          <SocialContainer onClick={() => handleClick('twitter')}>
            <TwitterIcon height="100%" width="100%"></TwitterIcon>
          </SocialContainer>
          <SocialContainer onClick={() => handleClick('facebook')}>
            <FacebookIcon height="100%" width="100%"></FacebookIcon>
          </SocialContainer>
        </LoginWithContainer>
      )}
    </Container>
  );
}
