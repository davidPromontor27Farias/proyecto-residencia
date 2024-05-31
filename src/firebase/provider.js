import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


//Instanciamos el proveedor de google
const googleProvider = new GoogleAuthProvider();

export const signInGoogle = async() => {

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const {displayName, email, phoneNumber, photoURL, uid} = result.user;
        return{
            ok: true,
            //mandamos la informacion del usuario
            displayName, email, phoneNumber, photoURL, uid
        }
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        
        return {
            ok: false,
            errorMessage
    
        }


    }
}

export const startInWithEmailAndPassword = async({password, email, displayName, phoneNumber}) => {


    try {

        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        
        //Guardamos los datos en el reducer
        const {uid, photoURL} = resp.user;


        //actualizamos el nomnre en firebase
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });
        

        return{
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        
        return {ok: false, errorMessage: 'Ya hay un usuario con ese correco electronico'};
    }
}

export const loginWithEmailAndPassword = async({email, password}) => {

    try {

        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);

        const {displayName, uid, photoURL, phoneNumber} = result.user;
        
        return{
            ok: true,
            email, displayName, uid, photoURL, phoneNumber
            
        }
        
    } catch (error) {
        return {ok: false, errorMessage: 'No se encontro un usuario con los datos proporcionados'};
    }
}

export const logoutApp = async() => {

    //salisnor de la aplicacion
    return await FirebaseAuth.signOut();
}