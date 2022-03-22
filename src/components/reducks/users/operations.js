import { signInAction } from "./actions";
import { push } from "connected-react-router";

import { useNavigate } from "react-router-dom";

export const signIn = () => {
  // この関数はすぐにreturnする。このコールバック関数はasyncがついているので、中でawaitを使うことができる
  // 第一引数dispatchは、Actionsを呼び出す
  // 第二引数getStateでoperationsファイルの中で、現在のstateを呼び出す
  return async (dispatch, getState) => {
    //getState()は必ずメソッドとして呼び出す必要がある
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    // サインインしていなければサインイン処理をする
    if (!isSignedIn) {
      const url = "https://api.github.com/users/deatiger";
      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "0001",
          username: "変更された",
        })
      );
      dispatch(push("/"));
    }
  };
};


export const signOut = ()=>{
  return (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;
  

 dispatch(
   signInAction({
     isSignedIn: true,
     uid: "0001",
   })
 );

 dispatch(push("/contact"));
 
  };
}