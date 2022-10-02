import type {GlobalState} from '../GlobalState';

export function languageSelector(state: GlobalState) {
  return state.global.language;
}
