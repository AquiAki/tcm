// selectorsファイルではStoreで管理しているstateを簡単に参照する関数を記述する
// reselectというモジュールを使う
import { createSelector } from "reselect";

// 引数のstateはstore全体で管理しているstate。
// そしてstate.usersはstore全体の中のusersにかんするもの
const usersSelector = (state) => state.users;

// 第２引数のstateは第１引数であるusersSelectorが返す値。つまりstate.users。
// よってstate.uidはstate.users.uidのこと。
// storeの中で管理しているusersステートが持っているuidの値のこと
export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
);
