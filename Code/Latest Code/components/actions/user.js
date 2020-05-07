
import Firebase, {db} from '../../config'

// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

export const login = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)

            dispatch(getUser(response.user.uid))
        } catch (e) {
            alert(e)
        }
    }
}

export const getUser = uid => {
    return async (dispatch, getState) => {
        try {
          //need to make this realtime instead of firestore
            const user = await db
            .ref('users/' + uid)
            .once('value')
            .then(function(snapshot){
              var name = (snapshot.val().name);
              var calsIn = (snapshot.val().calIn)
            });
            /*
                .collection('users')
                .doc(uid)
                .get()
*/
            dispatch({ type: LOGIN, payload: user.snapshot() })
        } catch (e) {
            alert(e)
        }
    }
}

export const signup = () => {
    return async (dispatch, getState) => { 
        try {
            const { email, password } = getState().user
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    
                }
//need to make this realtime instead of firestore 
                db.collection('users')
                    .doc(response.user.uid)
                    .set(user)

                dispatch({ type: SIGNUP, payload: user })
            }
        } catch (e) {
            alert(e)
        }
    }
}

