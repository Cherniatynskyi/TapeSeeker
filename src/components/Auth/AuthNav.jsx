import { NavLink, useParams } from 'react-router-dom';
import css from './Auth.module.css';
import { SignIn } from './SignIn';
import { Login } from './Login';

export const AuthNav = () => {
  const { id } = useParams();

  return (
    <div className={css.authForm}>
      <div className={css.authNav}>
        <NavLink
          className={`${css.authLink1} ${
            id === 'register' ? css.linkActive : ''
          }`}
          to="/auth/register"
        >
          Registration
        </NavLink>
        <NavLink
          className={`${css.authLink2} ${id === 'login' ? css.linkActive : ''}`}
          to="/auth/login"
        >
          Log In
        </NavLink>
        {id === 'register' ? <SignIn /> : <Login />}
      </div>
    </div>
  );
};