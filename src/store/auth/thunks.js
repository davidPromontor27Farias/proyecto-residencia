
import { loginWithEmailAndPassword, logoutApp, signInGoogle, startInWithEmailAndPassword } from "../../firebase/provider";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = () => {

    return async(dispatch) => {
        dispatch(checkingCredentials())
    }
}


export const startOnGoogleSign = () => {
   
    return async(dispatch) => {

        dispatch(checkingCredentials());

        const result = await signInGoogle();
        //Si no oaso nos mostrar el eror
        if(!result.ok ) return    dispatch(logout(result.errorMessage()));

        //si si paso, llenas la informacion del usuario
        dispatch(login(result));
    }
}


export const startSignInWithEmailAndPassword = ({email, password, displayName}) => {
    
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const {uid, photoURL, ok, errorMessage} = await startInWithEmailAndPassword({email, password, displayName});

        if(!ok) return dispatch(logout({errorMessage}));
        
        //Mandamos la informacion al redux
        dispatch(login({uid, photoURL, email, displayName}))

    }
}


export const startLoginWithEmailAndPassword = ({email, password}) => {

    return async(dispatch) => {

        dispatch(checkingCredentials());
        const res = await loginWithEmailAndPassword({email, password})
        

        if(!res.ok) return dispatch(logout(res));
        dispatch(login(res));
    }
}

export const startLogout = () => {

    return async(dispatch) => {
        await logoutApp();
        dispatch(logout({errorMessage: null}))
    }
}