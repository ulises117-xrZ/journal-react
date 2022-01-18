import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => dispatch(login(user.uid, user.displayName)))

    }
}

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, "pedro"));
        }, 3000);
    }
}