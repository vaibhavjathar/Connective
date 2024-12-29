import { auth, provider } from "../firebase"
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})
export function signInAPI(){
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
        dispatch(setUser(payload.user));
        })
        .catch((error) => alert(error.messeage));
    };
};

export function getUserAuth(){
    return (dispatch) => {
      auth.onAuthStateChanged(async(user) => {
        if (user) {
          dispatch(setUser(user));
        }
      });
    };
  }


  export function signOutAPI() {
    return (dispatch) => {
      auth
        .signOut()
        .then(() => {
          // Successfully signed out, dispatching action to clear user
          dispatch(setUser(null));
        })
        .catch((error) => {
          // Handle error during sign-out
          console.log(error.message);
        });
    };
  }
  
  // export function signOutAPI() {
  //   return (dispatch) => {
  //     auth
  //     .signOut()
  //     .then(() => {
  //       dispatch(setUser(null));
  //     })
  //     .cache((error) => {
  //       console.log(error.message);
  //     });
  //   };
  // }

// import { auth, provider } from "../firebase";
// import { SET_USER } from "./actionType";

// export const setUser = (payload) => ({
//   type: SET_USER,
//   user: payload,
// });

// export const signInAPI = () => {
//   return (dispatch) => {
//     auth.signInWithPopup(provider)
//       .then((result) => {
//         dispatch({
//           type: "SET_USER",
//           user: result.user,
//         });
//       })
//       .catch((error) => alert(error.message));
//   };
// };

// export function getUserAuth(){
//   return (dispatch) => {
//     auth.onAuthStateChanged(async(user) => {
//       if (user) {
//         dispatch(setUser(user));
//       }
//     });
//   };
// }