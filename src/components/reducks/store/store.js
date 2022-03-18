import {
  // reduxのパッケージをimport
  createStore as reduxCreateStore,
  combineReducers,

  // middlewareの導入に関してはA
  applyMiddleware,
  compose,
} from "redux";

// redux-thunkの導入についてはB
// redux-thunkとはreduxで非同期処理を制御するライブラリ
// 通常のActionsはaction objectしか受け取れないので関数を受け取れない
// つまりasyncやawait,promiseを使えない
import thunk from "redux-thunk";

// A. connected-react-routerはパッケージ
import { connectRouter, routerMiddleware } from "connected-react-router";

import { UsersReducer } from "../users/reducers";



// history: 「reactアプリ内でブラウザが前回や今どのパスにいたのか」という値
// historyを引数として入れるのもA、middlewareの導入
export default function createStore(history) {
  return reduxCreateStore(
    // combineReducersはそれぞれのreducer(ex. usersのreducerやproductのreducer)をまとめる
    combineReducers({
      // A. reduxのstoreにrouterというstateを作る。このstateで、historyが持っているパスの情報（ex。現在のurlはどこか）を管理する
      router: connectRouter(history),
      users: UsersReducer,
    }),
    // applyMiddlewareは導入したミドルウェアの数だけ受け取ることができる
    compose(applyMiddleware(
      routerMiddleware(history),
      // B
      thunk
    ))
  );
}



// import * as increase  from "../users/actions";
// import { createStore, combineReducers } from 'redux';

// const countReducer = (
//   state = {
//     count: 50,
//   }
// ) => {
//   return state;
// };

// const postsReducer = (
//   state = {
//     posts: [
//       { id: 1, title: 'Reduxについて' },
//       {
//         id: 2,
//         title: 'ReduxのHooksについて',
//       },
//     ],
//   }
// ) => {
//   return state;
// };

// const rootReducer = combineReducers({
//   countReducer,
//   postsReducer,
// });

// const initialState = countReducer.state.count

// const reducer = (state = initialState, increase) => {
//   switch (increase.type) {
//     case "INCREASE_COUNT":
//       return {
//         count: state.count + 1,
//       };
//     case "DECREASE_COUNT":
//       return {
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export default store;