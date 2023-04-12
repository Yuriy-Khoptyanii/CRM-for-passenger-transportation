/* eslint-disable import/no-cycle */
import React, { memo, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import cn from 'classnames';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import { Context } from '../../App';

export const NavBar: React.FC = memo(() => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <div className="navBar">
      <nav className="nav">
        {!user
          ? (
            <NavLink
              to="/login"
              className={({ isActive }) => cn('link__item', {
                'is-active': isActive,
              })}
            >
              Enter
            </NavLink>
          )
          : (
            <NavLink
              to="/login"
              className={({ isActive }) => cn('link__item', {
                'is-active': isActive,
              })}
            >
              <Button
                type="button"
                className="btn btn-secondary btn-block"
                onClick={() => auth.signOut()}
              >
                Exit
              </Button>
            </NavLink>
          )}

        <NavLink
          to="/InformationPage"
          className={({ isActive }) => cn('link__item', {
            'is-active': isActive,
          })}
        >
          Information
          <br />
          Page
        </NavLink>
      </nav>
    </div>
  );
});
