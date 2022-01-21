import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator';
import { startGoogleLogin, startLoginWithEmailAndPassword } from '../../actions/auth'
import { removeError, setErrorAction } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'


const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        email: "cruz@gmail.com",
        password: 123456
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginWithEmailAndPassword(email, password));
        }

    }
    const { email, password } = formValues;

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const isFormValid = () => {
        if (email.trim().length === 0) {
            dispatch(setErrorAction("El correo no puede quedar vacio"));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction('El email es invalido'));
            console.log('email is invalid');
            return false;
        }
        dispatch(removeError());
        return true;
    }
    return (
        <div>
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className='auth__input'
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className='auth__input'
                    autoComplete="off"
                    value={password}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary btn-block" disabled={loading} >
                    Login
                </button>
                <div className='auth__social-network'>
                    <p>Login with social network</p>
                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link className='link' to="/auth/register">
                        Create new account
                    </Link>
                </div>
            </form>
            {/* {
                ditto ?
                ditto.map(
                    (item, index) => {
                        return <h1 key = {index}>{item.name}</h1>
                    }
                )
                :
                null
            } */}
        </div>
    )
}

export default LoginScreen
