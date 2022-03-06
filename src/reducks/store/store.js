// import {
//   // reduxのパッケージをimport
//   createStore as reduxCreateStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";

// // connected-react-routerはパッケージ
// import { connectRouter, routerMiddleware } from "connected-react-router";



// // history: 「reactアプリ内でブラウザが前回や今どのパスにいたのか」という値
// export default function createStore(history) {
//   return reduxCreateStore(
//     combineReducers({
//       // reduxのstoreにrouterというstateを作る。このstateで、historyが持っているパスの情報を管理する
//       router: connectRouter(history),
      
//     }),
//     applyMiddleware(routerMiddleware(history))
//   );
// }
