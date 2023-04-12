/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import './EnterForm.scss';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../signUp/SignUp';
import { SignIn } from '../signIn/SignIn';
import { Context } from '../../App';

export const EnterForm: React.FC = () => {
  const [isUser, setIsUser] = useState(true);
  const { auth } = useContext(Context);

  const navigate = useNavigate();

  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    console.log(user);
    navigate('/InformationPage');
  };

  const handleSignUp = () => {
    setIsUser(!isUser);
  };

  return (
    <div className="auth">
      {isUser
        ? <SignIn handleSignUp={handleSignUp} />
        : <SignUp handleSignUp={handleSignUp} />}
      <div className="auth__additional">
        <h5>LogIn as a user</h5>
        <Button onClick={loginGoogle} type="button" className="btn btn-secondary btn-block">Google</Button>
        <Button type="button" className="btn btn-secondary btn-block">Phone</Button>
        <Button type="button" className="btn btn-secondary btn-block">Facebook</Button>
      </div>
    </div>
  );
};
