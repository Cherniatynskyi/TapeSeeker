import { AuthNav } from 'components/Auth/AuthNav';
import css from '../../components/Auth/Auth.module.css';

const AuthPage = () => {
  return (
    <div className={css.authPageWrapper}>
      <AuthNav />
    </div>
  );
};


export default AuthPage