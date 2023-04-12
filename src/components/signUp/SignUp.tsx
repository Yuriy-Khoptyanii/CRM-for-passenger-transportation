/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Button } from 'react-bootstrap';
// import '../enterForm/EnterForm.scss';

type Props = {
  handleSignUp: () => void;
};

export const SignUp: React.FC<Props> = ({ handleSignUp }) => {
  return (
    <form className="auth__form">
      <h2>Sign UP</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          // value={phone}
          // onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          className="form-control"
          id="gender"
          // value={gender}
          // onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="driver"
              value="driver"
              // checked={role === 'driver'}
              // onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="driver">
              Driver
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="passenger"
              value="passenger"
              // checked={role === 'passenger'}
              // onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="passenger">
              Passenger
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              id="dispatcher"
              value="dispatcher"
              // checked={role === 'dispatcher'}
              // onChange={(e) => setRole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="dispatcher">
              Dispatcher
            </label>
          </div>
        </div>
      </div>

      <Button type="submit" className="btn btn-primary">
        Sign Up
      </Button>
      <Button
        type="button"
        className="btn btn-success btn__SignUp"
        onClick={() => handleSignUp()}
      >
        already registered
      </Button>
    </form>
  );
};
