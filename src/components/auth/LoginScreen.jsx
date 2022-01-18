import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'


const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: "ulisesCruz@gmail.com",
        password: 123456
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));

    }
    const { email, password } = formValues;

    const handleGoogleLogin = ()=>{
        dispatch(startGoogleLogin());
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
                <button type="submit" className="btn btn-primary btn-block">
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
        </div>
    )
}

export default LoginScreen
