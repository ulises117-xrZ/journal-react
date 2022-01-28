import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'
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

export const startLoginWithEmailAndPassword = (email, password) => {

    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            }).catch(e => {
                dispatch(finishLoading())
                Swal.fire('Error', e.message, 'error')
            });
    }
}

export const startRegisterWithEmailPasswordAndName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, {
                    displayName: name
                })
                dispatch(login(user.uid, user.displayName));
            }).catch(error => Swal.fire("Error", error.message, "error"));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})

