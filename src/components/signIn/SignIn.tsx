/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button } from 'react-bootstrap';
// import '../enterForm/EnterForm.scss';

type Props = {
  handleSignUp: () => void;
};

export const SignIn: React.FC<Props> = ({ handleSignUp }) => {
  return (
    <form className="auth__form">
      <h2>Log In</h2>

      <div className="form-group">
        <label htmlFor="username">E-mail:</label>
        <input
          type="text"
          className="form-control"
          id="username"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" className="btn btn-primary">Log In</Button>
      <Button
        type="button"
        className="btn btn-success btn__SignUp"
        onClick={() => handleSignUp()}
      >
        Sign UP
      </Button>
    </form>
  );
};
