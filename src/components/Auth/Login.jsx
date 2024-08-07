import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage } from 'formik';
import css from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/Auth/authThunk';
// import { Spinner } from 'components/Spinner';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])/, 'Password must meet the requirements*')
    .min(8, 'Password must be at least 6 characters')
    .max(64, 'Password must be no more than 16 characters')
    .required('Password is required*'),
});

export const Login = () => {
  const dispatch = useDispatch();
//   const isLoading = useSelector(state=> state.auth.isLoading)

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = e => {
    const { email, password } = e;
    dispatch(loginThunk({ email, password }));
  };

  return (
    <>
    {/* {isLoading && <div className={css.loaderBackdrop}><Spinner></Spinner></div>} */}
    <div className={css.loginForm}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={e => handleSubmit(e)}
      >
        {({ errors, touched }) => (
          <Form className={css.Form} autoComplete="off">
            <div className={css.fieldWrapper}>
              <Field
                className={css.field}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <ErrorMessage name="email">
                  {errorMsg => (
                    <div className={css.errorMessage}>{errorMsg}</div>
                  )}
                </ErrorMessage>
              )}
            </div>
            <div className={css.notError}></div>

            <div className={`${css.fieldWrapper} ${css.passwordWrapper}`}>
              <Field
                className={css.field}
                id={css.field_password}
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
              />
              {passwordVisible ? (
                <button
                  className={css.iconBtn}
                  type="button"
                  onClick={handleClickPasswordVisibility}
                >
                  {/* <svg className={css.svg}>
                    <use href={`${sprite}#icon-eye`} />
                  </svg> */}
                </button>
              ) : (
                <button
                  className={css.iconBtn}
                  type="button"
                  onClick={handleClickPasswordVisibility}
                >
                  {/* <svg className={css.svg}>
                    <use href={`${sprite}#icon-eye`} />
                  </svg> */}
                </button>
              )}
              {errors.password && touched.password && (
                <ErrorMessage name="password">
                  {errorMsg => (
                    <div className={css.errorMessage}>{errorMsg}</div>
                  )}
                </ErrorMessage>
              )}
            </div>
            <div className={css.notError}></div>

            <button className={css.button} type="submit">
              Log In Now
            </button>
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
};