import type {GlobalState} from '../GlobalState';

export function languageSelector(state: GlobalState) {
  return state.global.language;
}

export function tokenSelector(state: GlobalState) {
  return state.global.token;
}

export function refreshSelector(state: GlobalState) {
  return state.global.refreshToken;
}
