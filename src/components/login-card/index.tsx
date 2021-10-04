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
import {useStoreDispatch, useStoreSelector} from 'src/redux/store';
import {login, loginType, logOut} from 'src/redux/slices/user-slice';

export default function LoginCard() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useStoreDispatch();
  const user = useStoreSelector(state => state.userStore.user);

  const toggleIsVisible = () => {
    setIsVisible(prev => !prev);
  };
  const handleClick = (type: loginType) => {
    dispatch(login(type));
  };

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      {user ? (
        <UserText onClick={handleLogout} title="Click me to log out 😳">
          Hola, {user?.displayName?.slice(0, user?.displayName.indexOf(' '))}!
        </UserText>
      ) : (
        <LoginButton onClick={toggleIsVisible}>Login</LoginButton>
      )}
      {isVisible && user === null && (
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
