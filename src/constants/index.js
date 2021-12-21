import * as types from './ActionTypes';
import { initialState } from './initialState';
import firebaseConfig from './firebaseConfig';
import edamamConfig from './edamamConfig';
import { guestId } from './guestId';

export default {
  edamamConfig: edamamConfig,
  firebaseConfig: firebaseConfig,
  guestId: guestId,
  initialState: initialState,
  types: types
};
