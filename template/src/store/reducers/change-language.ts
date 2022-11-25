import {localization} from 'src/i18n/helpers/Localization';
import type {AppLanguage} from 'src/types/AppLanguage';
import type {GlobalAction} from '../GlobalAction';
import type {GlobalState} from 'src/store/GlobalState';

export function changeLanguage(
  state: GlobalState['global'],
  action: GlobalAction<AppLanguage>,
) {
  const language = action.payload;
  state.language = language;
  /**
   * Language state's side effect
   */
  localization.changeLanguage(language).then();
  // appStorage.setLanguage(language);
}
