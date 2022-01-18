import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import {
    setErrorAction,
    removeError
} from '../../actions/ui';

const RegisterScreen = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.ui);
    const [formValues, handleInputChange] = useForm({
        name: 'Ulises',
        email: 'cruz@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('form correcto');
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('name is required');

            dispatch(setErrorAction('el usuario es invalido'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setErrorAction('El email es invalido'));
            console.log('email is invalid');
            return false;
        } else if (password !== password2 || password.length < 5 || password2.length < 5) {
            dispatch(setErrorAction('la contraseña es invalida'));
            console.log('password error');
            return false;
        }
        dispatch(removeError());
        return true;

    }

    return (
        <div>
            <h3 className='auth__title'>Register</h3>
            <form onSubmit={handleRegister}>
                {state.msgError &&
                    (<div className="auth__alert-error">
                        {state.msgError}
                    </div>)
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className='auth__input'
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
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
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className='auth__input'
                    autoComplete="off"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Register
                </button>
                <Link className='link' to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </div>
    )
}

export default RegisterScreen
